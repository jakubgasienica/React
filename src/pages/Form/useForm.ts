import { ChangeEvent, useState } from "react";
import type {
	FormData,
	KeyOfMultiple,
	ContractType,
	ContractTypeSalary,
} from "utils/type";

enum Loading {
	Load,
}

const useForm = () => {
	const [loading, setLoading] = useState<Loading | null>(null);
	const [error, setError] = useState(false);

	const [formData, setFormData] = useState<FormData>({
		title: "",
		thumb: null,
		city: "",
		duration: 0,
		//  wartośc deafult 0 -  czy moge zmienic na coś innego zeby nie było erroru
		company: "",
		benefits: [],
		categories: [],
		contractTypes: [],
		seniorities: [],
		description: "",
	});

	const handleChange = (
		key: keyof FormData,
		event: ChangeEvent<HTMLInputElement>
	) => {
		const str = event.target.value;

		setFormData(state => ({
			...state,
			[key]: str,
		}));
	};

	const handleDescription = (
		key: keyof FormData,
		event: ChangeEvent<HTMLTextAreaElement>
	) => {
		const str = event.target.value;

		setFormData(state => ({
			...state,
			[key]: str,
		}));
	};

	const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
		if (event.target.files) {
			const file = event.target.files[0];
			setFormData(state => ({
				...state,
				thumb: file,
			}));
		}
	};

	function handleMultipleChange(
		id: typeof formData[KeyOfMultiple][0],
		key: KeyOfMultiple
	) {
		const tmp = [...formData[key]];

		if (tmp.includes(id)) {
			tmp.splice(tmp.indexOf(id), 1);
		} else {
			tmp.push(id);
		}

		setFormData(state => ({
			...state,
			[key]: tmp,
		}));
	}

	function handleSalaryCheckboxChange(idValue: ContractType["id"]) {
		setFormData(state => {
			const index = state.contractTypes.findIndex(({ id }) => id === idValue);

			if (index >= 0) {
				state.contractTypes.splice(index, 1);
			} else {
				state.contractTypes.push({
					id: idValue,
					salaryFrom: 0,
					salaryTo: 0,
				});
			}
			return { ...state, contractTypes: state.contractTypes };
		});
	}

	function handleSalaryChange(
		id: number,
		key: keyof ContractTypeSalary,
		event: React.ChangeEvent<HTMLInputElement>
	) {
		const str = event.target.value;
		setFormData(state => ({
			...state,
			contractTypes: state.contractTypes.map(type => {
				if (type.id === id) {
					return {
						...type,
						[key]: str,
					};
				}
				return type;
			}),
		}));
	}

	async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
		e.preventDefault();

		const params = {
			method: "POST",
			body: JSON.stringify({
				benefit_ids: formData.benefits,
				category_ids: formData.categories,
				seniority_id: formData.seniorities,
				title: formData.title,
				duration: formData.duration,
				company_name: formData.company,
				company_city: formData.city,
				contracts: formData.contractTypes.map(con => ({
					salary_from: con.salaryFrom,
					salary_to: con.salaryTo,
					contract_type_id: con.id,
				})),
			}),
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		};

		try {
			const res = await fetch("http://localhost:4000/offers", params);
			await res.json();
		} catch (e) {
			return error;
		} finally {
			setLoading(Loading.Load);
		}
	}

	return {
		formData,
		handleChange,
		handleFileChange,
		handleMultipleChange,
		handleSalaryChange,
		handleSalaryCheckboxChange,
		handleSubmit,
		handleDescription,
	};
};

export { useForm };

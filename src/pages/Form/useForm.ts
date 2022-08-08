import { ChangeEvent, useState } from "react";
import { Error } from "components/Error/Error";

type ContractTypeSalary = {
	salaryFrom: number;
	salaryTo: number;
};

type ContractType = {
	contractTypeId: number;
} & ContractTypeSalary;

type FormDataSingle = {
	title: string;
	thumb: null | File;
	city: string;
	duration: number;
	company: string;
};

type FormDataMultiple = {
	benefits: number[];
	categories: number[];
	contractTypes: ContractType[];
	seniorities: number[];
};

type FormData = FormDataSingle & FormDataMultiple;

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
		company: "",
		benefits: [],
		categories: [],
		contractTypes: [],
		seniorities: [],
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
		multiplyArg: keyof FormDataMultiple,
		event: ChangeEvent<HTMLInputElement>
	) {
		const tmp = [...formData[multiplyArg]];

		if (tmp.includes(parseInt(event.target.value))) {
			tmp.splice(tmp.indexOf(parseInt(event.target.value)), 1);
		} else {
			tmp.push(parseInt(event.target.value));
		}

		setFormData(state => ({
			...state,
			[multiplyArg]: tmp,
		}));
	}

	function handleSalaryCheckboxChange(event: ChangeEvent<HTMLInputElement>) {
		const id = parseInt(event.target.value);
		setFormData(state => {
			const index = state.contractTypes.findIndex(
				({ contractTypeId }) => id === contractTypeId
			);

			if (index >= 0) {
				state.contractTypes.splice(index, 1);
			} else {
				state.contractTypes.push({
					contractTypeId: id,
					salaryFrom: 0,
					salaryTo: 0,
				});
			}
			return { ...state, contractTypes: state.contractTypes };
		});
	}

	function handleSalaryChange(
		id: ContractType["contractTypeId"],
		key: keyof ContractTypeSalary,
		event: ChangeEvent<HTMLInputElement>
	) {
		const str = event.target.value;

		setFormData(state => ({
			...state,
			contractTypes: state.contractTypes.map(type => {
				if (type.contractTypeId === id) {
					return {
						...type,
						[key]: str,
					};
				}
				return type;
			}),
		}));
	}

	async function handleSubmit() {
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
					contract_type_id: con.contractTypeId,
				})),
			}),
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		};

		try {
			const res = await fetch("http://localhost:4000/offers", params);
			const offer = await res.json();
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
	};
};

export { useForm };

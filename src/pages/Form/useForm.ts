import { ChangeEvent, useState } from "react";
import type {
	FormData,
	KeyOfMultiple,
	ContractType,
	ContractTypeSalary,
} from "utils/type";
import { mapRequest } from "./mapRequest";

export enum State {
	None,
	Loading,
	Success,
	Error,
}

const useForm = () => {
	const [state, setState] = useState<State>(State.None);
	const [formData, setFormData] = useState<FormData>({
		title: "",
		thumb: null,
		city: "",
		duration: "",
		company: "",
		benefits: [],
		categories: [],
		contractTypes: [],
		seniorities: [],
		description: "",
	});

	const handleDuration = (event: ChangeEvent<HTMLInputElement>) => {
		const str = event.target.value;

		setFormData(state => ({
			...state,
			duration: str,
		}));
	};
	const handleChange = (
		key: keyof FormData,
		event: ChangeEvent<HTMLInputElement>
	) => {
		let str = event.target.value;

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
		const value = parseInt(event.target.value);

		setFormData(state => ({
			...state,
			contractTypes: state.contractTypes.map(type => {
				if (type.id === id) {
					return {
						...type,
						[key]: value,
					};
				}

				return type;
			}),
		}));
	}

	async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
		e.preventDefault();
		const mapedRequestData = await mapRequest(formData);

		const params = {
			method: "POST",
			body: JSON.stringify(mapedRequestData),
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		};

		try {
			setState(State.Loading);

			const res = await fetch("http://localhost:4000/offers", params);
			await res.json();
			setState(State.Success);
		} catch (e) {
			setState(State.Error);
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
		handleDuration,
		state,
	};
};

export { useForm };

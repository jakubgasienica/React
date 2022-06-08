import css from "./Form.module.css";
import { useState, ChangeEvent } from "react";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import { mapResponse } from "../Offers/Offers";

type FormData = {
	title: string;
	thumb: null | File;
	salary: string;
	city: string;
	stack: string;
};

type RequestData = {
	title: string;
	duration: number;
	description: string;
	thumb: string;
	company_name: string;
	company_city: string;
	seniority_id: string;
	category_ids: string[];
	benefit_ids: string[];
	contracts: {
		salary_from: string;
		salary_to: string;
		contract_type_id: string;
	}[];
};

function Form() {
	const [formData, setFormData] = useState<FormData>({
		title: "",
		thumb: null,
		salary: "",
		city: "",
		stack: "",
	});

	const handleChange = (
		key: keyof typeof formData,
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

	function handleSubmit() {
		console.log(formData.title);
	}

	return (
		<div className={css.container}>
			<h2>Add your job's ad!</h2>
			<Input
				placeholder='Add title'
				value={formData.title}
				onChange={event => handleChange("title", event)}
			/>
			<Input
				placeholder='Salary'
				value={formData.salary}
				onChange={event => handleChange("salary", event)}
			/>
			<Input
				placeholder='City'
				value={formData.city}
				onChange={event => handleChange("city", event)}
			/>
			<Input
				placeholder='Stack'
				value={formData.city}
				onChange={event => handleChange("stack", event)}
			/>
			<Input
				placeholder='Add Logo your firm'
				// value={formData.thumb?.toString() ?? ""}
				type='file'
				onChange={handleFileChange}
			/>
			<Button onClick={handleSubmit}>Add your jobs!</Button>
		</div>
	);
}

export { Form };

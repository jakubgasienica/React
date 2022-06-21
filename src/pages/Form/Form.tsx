import css from "./Form.module.css";
import { useState, ChangeEvent } from "react";
import { Input } from "components/Input/Input";
import { Button } from "components/Button/Button";
import { ConfigContext } from "components/ConfigContextProvider/configContext";
import React from "react";

type FormDataSingle = {
	title: string;
	thumb: null | File;
	salary: string;
	city: string;
	stack: string;
};

type FormDataMultiple = {
	benefits: number[];
	categories: number[];
	contractTypes: number[];
	seniorities: number[];
};

type FormData = FormDataSingle & FormDataMultiple;

// type RequestData = {
// 	title: string;
// 	duration: number;
// 	description: string;
// 	thumb: string;
// 	company_name: string;
// 	company_city: string;
// 	seniority_id: string;
// 	category_ids: string[];
// 	benefit_ids: string[];
// 	contracts: {
// 		salary_from: string;
// 		salary_to: string;
// 		contract_type_id: string;
// 	}[];
// };

function Form() {
	const [formData, setFormData] = useState<FormData>({
		title: "",
		thumb: null,
		salary: "",
		city: "",
		stack: "",
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

	function handleSubmit() {
		console.log(formData.title);
	}

	return (
		<ConfigContext.Consumer>
			{config => {
				return (
					<div className={css.container}>
						<h2>Add your job's ad!</h2>
						<h3>Benefits</h3>
						{config.benefits.map(benefit => (
							<div className='box__cat' key={benefit.id}>
								<input
									type='checkbox'
									checked={formData.benefits.includes(benefit.id)}
									id={`benefit-${benefit.id}`}
									onChange={event => handleMultipleChange("benefits", event)}
									value={benefit.id}
								/>
								<label htmlFor={`benefit-${benefit.id}`}>{benefit.name}</label>
							</div>
						))}
						<h3>Categories of stack</h3>
						{config.categories.map(cat => (
							<div className={css.box__cat} key={cat.id}>
								<input
									type='checkbox'
									checked={formData.categories.includes(cat.id)}
									id={`cat-${cat.id}`}
									onChange={event => handleMultipleChange("categories", event)}
									value={cat.id}
								/>
								<label htmlFor={`benefit-${cat.id}`}>{cat.name}</label>
							</div>
						))}
						<h3>Categories of Contracts</h3>
						{config.contractTypes.map(type => (
							<div className={css.box__cat} key={type.id}>
								<input
									type='checkbox'
									checked={formData.contractTypes.includes(type.id)}
									id={`type-${type.id}`}
									onChange={event =>
										handleMultipleChange("contractTypes", event)
									}
									value={type.id}
								/>
								<label htmlFor={`benefit-${type.id}`}>{type.name}</label>
							</div>
						))}

						<h3>Categories of seniorities</h3>
						{config.seniorities.map(seniority => (
							<div className={css.box__cat} key={seniority.id}>
								<input
									type='checkbox'
									checked={formData.contractTypes.includes(seniority.id)}
									id={`seniority-${seniority.id}`}
									onChange={event => handleMultipleChange("seniorities", event)}
									value={seniority.id}
								/>
								<label htmlFor={`benefit-${seniority.id}`}>
									{seniority.name}
								</label>
							</div>
						))}

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
			}}
		</ConfigContext.Consumer>
	);
}

export { Form };

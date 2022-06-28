import css from "./Form.module.css";
import { Input } from "components/Input/Input";
import { Button } from "components/Button/Button";
import { ConfigContext } from "components/ConfigContextProvider/configContext";
import { useForm } from "./useForm";

function Form() {
	const {
		formData,
		handleChange,
		handleFileChange,
		handleMultipleChange,
		handleSalaryChange,
		handleSalaryCheckboxChange,
		handleSubmit,
	} = useForm();

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

						{config.contractTypes.map(type => {
							const contractType = formData.contractTypes.find(
								({ contractTypeId }) => contractTypeId === type.id
							);

							return (
								<div className={css.box__cat} key={type.id}>
									<input
										type='checkbox'
										checked={!!contractType}
										id={`type-${type.id}`}
										onChange={handleSalaryCheckboxChange}
										value={type.id}
									/>
									<label htmlFor={`contractTypes-${type.id}`}>
										{type.name}
									</label>
									<Input
										placeholder='od'
										value={contractType?.salaryFrom.toString()}
										onChange={event =>
											handleSalaryChange(type.id, "salaryFrom", event)
										}
									/>
									<Input
										placeholder='do'
										value={contractType?.salaryTo.toString()}
										onChange={event =>
											handleSalaryChange(type.id, "salaryTo", event)
										}
									/>
								</div>
							);
						})}

						<h3>Categories of seniorities</h3>
						{config.seniorities.map(seniority => (
							<div className={css.box__cat} key={seniority.id}>
								{/* wykorzystac Input komponent */}
								<input
									type='checkbox'
									checked={formData.seniorities.includes(seniority.id)}
									id={`seniority-${seniority.id}`}
									onChange={event => handleMultipleChange("seniorities", event)}
									value={seniority.id}
								/>
								<label htmlFor={`seniorities-${seniority.id}`}>
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
							placeholder='City'
							value={formData.city}
							onChange={event => handleChange("city", event)}
						/>
						<Input
							placeholder='Company Name'
							value={formData.company}
							onChange={event => handleChange("company", event)}
						/>
						<Input
							placeholder='Duration'
							value={formData.duration.toString()}
							onChange={event => handleChange("duration", event)}
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

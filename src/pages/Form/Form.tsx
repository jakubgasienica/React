import css from "./Form.module.css";
import { Input } from "components/Input/Input";
import { Button } from "components/Button/Button";
import { ConfigContext } from "components/ConfigContextProvider/configContext";
import { useForm } from "./useForm";
import { Submit } from "components/Submit/Submit";
import { InputCheckbox } from "components/InputCheckbox/InputCheckbox";

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
					<form className={css.wrapper}>
						<h2 className={css.title}>You can add your offer!</h2>
						<div className={css.questionsWrapper}>
							<div className={css.checkboxWrapper}>
								<div className={css.checkboxWrap}>
									<h3>Benefits</h3>
									{config.benefits.map(benefit => (
										<InputCheckbox
											checked={formData.benefits.includes(benefit.id)}
											id={`benefit-${benefit.id}`}
											key={benefit.id}
											onChange={event =>
												handleMultipleChange("benefits", event)
											}
											value={benefit.id}
											children={benefit.name}
											htmlFor={`benefit-${benefit.id}`}></InputCheckbox>
									))}
								</div>
								<div className={css.checkboxWrap}>
									<h3>Categories of stack</h3>
									{config.categories.map(cat => (
										<InputCheckbox
											checked={formData.categories.includes(cat.id)}
											id={`cat-${cat.id}`}
											key={cat.id}
											onChange={event =>
												handleMultipleChange("categories", event)
											}
											value={cat.id}
											children={cat.name}
											htmlFor={`benefit-${cat.id}`}></InputCheckbox>
									))}
								</div>
								<div className={css.checkboxWrap}>
									<h3>Categories of seniorities</h3>
									{config.seniorities.map(seniority => (
										<InputCheckbox
											checked={formData.seniorities.includes(seniority.id)}
											id={`seniority-${seniority.id}`}
											key={seniority.id}
											onChange={event =>
												handleMultipleChange("seniorities", event)
											}
											value={seniority.id}
											htmlFor={`seniorities-${seniority.id}`}
											children={seniority.name}></InputCheckbox>
									))}
								</div>
							</div>
							<div className={css.salariesWrpapper}>
								<h3>Categories of Contracts</h3>

								{config.contractTypes.map(type => {
									const contractType = formData.contractTypes.find(
										({ contractTypeId }) => contractTypeId === type.id
									);

									return (
										<div className={css.salaryWrapper} key={type.id}>
											<InputCheckbox
												checked={!!contractType}
												id={`type-${type.id}`}
												onChange={handleSalaryCheckboxChange}
												value={type.id}
												htmlFor={`contractTypes-${type.id}`}
												children={type.name}
											/>

											<div className={css.inputSalary}>
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
										</div>
									);
								})}
							</div>
							<div className={css.titleWrapper}>
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
									type='file'
									onChange={handleFileChange}
								/>
							</div>
						</div>
						<Submit onClick={handleSubmit}>Add your job!</Submit>
					</form>
				);
			}}
		</ConfigContext.Consumer>
	);
}

export { Form };

import { ConfigContext } from "components/ConfigContextProvider/configContext";
import { Input } from "components/Input/Input";
import { InputCheckbox } from "components/InputCheckbox/InputCheckbox";
import css from "./Form.module.css";
import { useForm } from "./useForm";

function FormCheckboxes() {
	const {
		formData,
		handleMultipleChange,
		handleSalaryChange,
		handleSalaryCheckboxChange,
	} = useForm();

	return (
		<ConfigContext.Consumer>
			{config => {
				return (
					<div className={css.partTwoWrapper}>
						<div className={css.checkboxWrapper}>
							<div className={css.checkboxWrap}>
								<h3>Benefits</h3>
								{config.benefits.map(benefit => (
									<InputCheckbox
										checked={formData.benefits.includes(benefit.id)}
										id={`benefit-${benefit.id}`}
										key={benefit.id}
										onChange={event => handleMultipleChange("benefits", event)}
										value={benefit.id}
										children={benefit.name}
										htmlFor={`benefit-${benefit.id}`}
									/>
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
										htmlFor={`benefit-${cat.id}`}
									/>
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
										children={seniority.name}
									/>
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
					</div>
				);
			}}
		</ConfigContext.Consumer>
	);
}

export { FormCheckboxes };

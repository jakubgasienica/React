import { ConfigContext } from "components/ConfigContextProvider/configContext";
import { Input } from "components/Input/Input";
import { InputCheckbox } from "components/InputCheckbox/InputCheckbox";
import css from "./FormCheckboxes.module.css";
import type { FormData, ContractTypeSalary } from "utils/type";
import { Button } from "components/Button/Button";
import { useValidationFormCheckboxes } from "../useValidationFormCheckboxes";

interface Props {
	onMultipeChange: (
		argHandleMultiple: ArgHandleMultipleType,
		event: React.ChangeEvent<HTMLInputElement>
	) => void;
	formData: FormData;
	onSalaryCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onSalaryChange: (
		id: number,
		key: keyof ContractTypeSalary,
		event: React.ChangeEvent<HTMLInputElement>
	) => void;
	onHandleBack: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	onHandleSubmit: () => Promise<boolean | undefined>;
}
type ArgHandleMultipleType = "benefits" | "categories" | "seniorities";

function FormCheckboxes({
	formData,
	onMultipeChange,
	onSalaryCheckboxChange,
	onSalaryChange,
	onHandleBack,
	onHandleSubmit,
}: Props) {
	const { validateSalary, validationErrorsFormCheckboxes } =
		useValidationFormCheckboxes(formData);
	return (
		<ConfigContext.Consumer>
			{config => {
				return (
					<div className={css.formWrapper}>
						<div className={css.checkboxesWrapper}>
							<div className={css.checkboxWrappper}>
								<h3 className={css.subtitle}>Benefits</h3>
								<div className={css.checkboxButtons}>
									{config.benefits.map(benefit => (
										<InputCheckbox
											checked={formData.benefits.includes(benefit.id)}
											id={`benefit-${benefit.id}`}
											key={benefit.id}
											onChange={event => onMultipeChange("benefits", event)}
											value={benefit.id}
											children={benefit.name}
											htmlFor={`benefit-${benefit.id}`}
										/>
									))}
								</div>
							</div>
							<div className={css.checkboxWrappper}>
								<h3 className={css.subtitle}>Categories of stack</h3>
								<div className={css.checkboxButtons}>
									{config.categories.map(cat => (
										<InputCheckbox
											checked={formData.categories.includes(cat.id)}
											id={`cat-${cat.id}`}
											key={cat.id}
											onChange={event => onMultipeChange("categories", event)}
											value={cat.id}
											children={cat.name}
											htmlFor={`benefit-${cat.id}`}
										/>
									))}
								</div>
							</div>
							<div className={css.checkboxWrappper}>
								<h3 className={css.subtitle}>Categories of seniorities</h3>
								<div className={css.checkboxButtons}>
									{config.seniorities.map(seniority => (
										<InputCheckbox
											checked={formData.seniorities.includes(seniority.id)}
											id={`seniority-${seniority.id}`}
											key={seniority.id}
											onChange={event => onMultipeChange("seniorities", event)}
											value={seniority.id}
											htmlFor={`seniorities-${seniority.id}`}
											children={seniority.name}
										/>
									))}
								</div>
							</div>
						</div>
						<div className={css.salariesWrpapper}>
							<h3 className={css.subtitle}>Categories of Contracts</h3>

							{config.contractTypes.map(type => {
								const contractType = formData.contractTypes.find(
									({ contractTypeId }) => contractTypeId === type.id
								);

								return (
									<div className={css.salaryWrapper} key={type.id}>
										<InputCheckbox
											checked={!!contractType}
											id={`type-${type.id}`}
											onChange={onSalaryCheckboxChange}
											value={type.id}
											htmlFor={`contractTypes-${type.id}`}
											children={type.name}
										/>

										<div className={css.inputSalary}>
											<Input
												placeholder='od'
												value={contractType?.salaryFrom.toString()}
												onChange={event =>
													onSalaryChange(type.id, "salaryFrom", event)
												}
												onBlur={validateSalary}
												error={
													validationErrorsFormCheckboxes?.contractTypes.find
												}
											/>
											<Input
												placeholder='do'
												value={contractType?.salaryTo.toString()}
												onChange={event =>
													onSalaryChange(type.id, "salaryTo", event)
												}
												onBlur={validateSalary}
												error={validationErrorsFormCheckboxes?.seniorities}
											/>
										</div>
									</div>
								);
							})}
						</div>
						<div className={css.buttonWrapper}>
							<Button onClick={onHandleBack} type='form'>
								{"< Back"}
							</Button>
							<Button onClick={onHandleSubmit} type='submit'>
								Accept All!
							</Button>
						</div>
					</div>
				);
			}}
		</ConfigContext.Consumer>
	);
}

export { FormCheckboxes };

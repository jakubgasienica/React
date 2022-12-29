import { ConfigContext } from "components/ConfigContextProvider/configContext";
import { Input } from "components/Input/Input";
import { InputCheckbox } from "components/InputCheckbox/InputCheckbox";
import css from "./FormCheckboxes.module.css";
import type {
	FormData,
	ContractType,
	ContractTypeSalary,
	KeyOfMultiple,
} from "utils/type";
import { Button } from "components/Button/Button";
import { useValidationFormCheckboxes } from "../useValidationFormCheckboxes";

interface Props {
	onMultipeChange: (id: FormData[KeyOfMultiple][0], key: KeyOfMultiple) => void;
	formData: FormData;
	onSalaryCheckboxChange: (id: ContractType["id"]) => void;
	onSalaryChange: (
		id: number,
		key: keyof ContractTypeSalary,
		event: React.ChangeEvent<HTMLInputElement>
	) => void;
	onHandleBack: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	onHandleSubmit: (
		e: React.MouseEvent<HTMLButtonElement>
	) => Promise<boolean | undefined>;
}

function FormCheckboxes({
	formData,
	onMultipeChange,
	onSalaryCheckboxChange,
	onSalaryChange,
	onHandleBack,
	onHandleSubmit,
}: Props) {
	const {
		validateSalaryField,
		validationErrorsFormCheckboxes,
		handleSubmit,
		validateSalaryIfIsGrater,
		clearContractTypeError,
	} = useValidationFormCheckboxes(formData, onHandleSubmit);
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
											onChange={event =>
												onMultipeChange(benefit.id, "benefits")
											}
											value={benefit.id}
											children={benefit.name}
											htmlFor={`benefit-${benefit.id}`}
										/>
									))}
								</div>
								<div className={css.errorWrapper}>
									<span className={css.errorText}>
										{validationErrorsFormCheckboxes?.benefits}
									</span>
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
											onChange={() => onMultipeChange(cat.id, "categories")}
											value={cat.id}
											children={cat.name}
											htmlFor={`benefit-${cat.id}`}
										/>
									))}
								</div>
								<div className={css.errorWrapper}>
									<span className={css.errorText}>
										{validationErrorsFormCheckboxes?.categories}
									</span>
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
											onChange={event =>
												onMultipeChange(seniority.id, "seniorities")
											}
											value={seniority.id}
											htmlFor={`seniorities-${seniority.id}`}
											children={seniority.name}
										/>
									))}
								</div>
								<div className={css.errorWrapper}>
									<span className={css.errorText}>
										{validationErrorsFormCheckboxes?.seniorities}
									</span>
								</div>
							</div>
						</div>
						<div className={css.salariesWrpapper}>
							<h3 className={css.subtitle}>Categories of Contracts</h3>
							<div className={css.salariesWrapperWithoutSubtitle}>
								{config.contractTypes.map(type => {
									const contractType = formData.contractTypes.find(
										({ id }) => id === type.id
									);

									return (
										<div className={css.salaryWrapper} key={type.id}>
											<InputCheckbox
												checked={!!contractType}
												id={`type-${type.id}`}
												onChange={checked => {
													onSalaryCheckboxChange(type.id);
													if (!checked) {
														clearContractTypeError(type.id);
													}
												}}
												value={type.id}
												htmlFor={`contractTypes-${type.id}`}
												children={type.name}
											/>

											<div className={css.inputSalary}>
												<Input
													placeholder='From'
													value={contractType?.salaryFrom.toString()}
													onChange={event =>
														onSalaryChange(type.id, "salaryFrom", event)
													}
													onBlur={() => {
														validateSalaryField(type.id, "salaryFrom");
													}}
													error={
														validationErrorsFormCheckboxes?.contractTypes.find(
															contractTypeError =>
																contractTypeError.id === type.id &&
																contractTypeError.field === "salaryFrom"
														)?.error
													}
												/>
												<Input
													placeholder='To'
													value={contractType?.salaryTo.toString()}
													onChange={event =>
														onSalaryChange(type.id, "salaryTo", event)
													}
													onBlur={() => {
														validateSalaryField(type.id, "salaryTo");
													}}
													error={
														validationErrorsFormCheckboxes?.contractTypes.find(
															contractTypeError =>
																contractTypeError.id === type.id &&
																contractTypeError.field === "salaryTo"
														)?.error
													}
												/>
												<div>
													<span className={css.errorText}>
														{
															validationErrorsFormCheckboxes?.contractTypes.find(
																contractTypeError =>
																	contractTypeError.id === type.id &&
																	contractTypeError.field === "both"
															)?.error
														}
													</span>
												</div>
											</div>
										</div>
									);
								})}
							</div>
							<div>
								<span className={css.errorText}>
									{validationErrorsFormCheckboxes?.minimumOneCategory}
								</span>
							</div>
						</div>
						<div className={css.buttonWrapper}>
							<Button onClick={onHandleBack} type='form'>
								{"< Back"}
							</Button>
							<Button onClick={handleSubmit} type='submit' submit={true}>
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

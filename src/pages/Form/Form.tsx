import css from "./Form.module.css";
import { ConfigContext } from "components/ConfigContextProvider/configContext";
import { useForm } from "./useForm";
import { FormInputs } from "./FormInputs";
import { FormCheckboxes } from "./FormCheckboxes";
import { Button } from "components/Button/Button";
import { useState } from "react";

enum Steps {
	Inputs = 1,
	Checkboxes = 2,
}

function Form() {
	const [step, setStep] = useState(Steps.Inputs);
	const {
		handleSubmit,
		formData,
		handleChange,
		handleFileChange,
		handleMultipleChange,
		handleSalaryChange,
		handleSalaryCheckboxChange,
	} = useForm();

	function handleNext(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		setStep(Steps.Checkboxes);
	}

	function handleBack(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		setStep(Steps.Inputs);
	}

	return (
		<ConfigContext.Consumer>
			{config => {
				return (
					<>
						<form className={css.wrapper}>
							{step === Steps.Inputs && (
								<FormInputs
									formData={formData}
									onFileChange={handleFileChange}
									onChange={handleChange}
								/>
							)}

							<div className={css.buttonWrapper}>
								{step === Steps.Inputs && (
									// TODO wruć buutona do forminput
									<Button onClick={handleNext} type='form'>
										{"Next Step >"}
									</Button>
								)}
							</div>

							{step === Steps.Checkboxes && (
								<FormCheckboxes
									formData={formData}
									onMultipeChange={handleMultipleChange}
									onSalaryCheckboxChange={handleSalaryCheckboxChange}
									onSalaryChange={handleSalaryChange}
								/>
							)}

							<div className={css.buttonWrapper}>
								{step === Steps.Checkboxes && (
									<Button onClick={handleBack} type='form'>
										{"< Back"}
									</Button>
								)}
								{step === Steps.Checkboxes && (
									<Button onClick={handleSubmit} type='submit'>
										Accept All!
									</Button>
								)}
							</div>
						</form>
					</>
				);
			}}
		</ConfigContext.Consumer>
	);
}

export { Form };

import css from "./Form.module.css";
import { ConfigContext } from "components/ConfigContextProvider/configContext";
import { useForm } from "./useForm";
import { FormInputs } from "./FormInputs/FormInputs";
import { FormCheckboxes } from "./FormCheckboxes.module.css/FormCheckboxes";
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
									onHandleNext={handleNext}
								/>
							)}

							{step === Steps.Checkboxes && (
								<FormCheckboxes
									formData={formData}
									onMultipeChange={handleMultipleChange}
									onSalaryCheckboxChange={handleSalaryCheckboxChange}
									onSalaryChange={handleSalaryChange}
									onHandleBack={handleBack}
									onHandleSubmit={handleSubmit}
								/>
							)}
						</form>
					</>
				);
			}}
		</ConfigContext.Consumer>
	);
}

export { Form };

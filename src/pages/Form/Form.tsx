import css from "./Form.module.css";
import { ConfigContext } from "components/ConfigContextProvider/configContext";
import { useForm } from "./useForm";
import { Submit } from "components/Submit/Submit";
import { FormInputs } from "./FormInputs";
import { FormCheckboxes } from "./FormCheckboxes";
import { Button } from "components/Button/Button";
import { useState } from "react";

function Form() {
	const [step, setStep] = useState(1);
	const {
		formData,
		handleChange,
		handleFileChange,
		handleMultipleChange,
		handleSalaryChange,
		handleSalaryCheckboxChange,
		handleSubmit,
	} = useForm();

	enum Step {
		Inputs = 1,
		Checkboxes = 2,
	}
	function handleBtn(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		e.preventDefault();
		step === 1 ? setStep(2) : setStep(1);
	}
	// const [step, setStep] = useStep(Step.Part1)

	/*
    if (step === 1) {
		return <FormPartOne onSubmit={() => setStep(2)} />
	}

	return <FormPartTwo onSubmit={handleSubmit} />

	*/

	return (
		<ConfigContext.Consumer>
			{config => {
				return (
					<>
						<form className={css.wrapper}>
							{step === 1 && <FormInputs />}
							{step === 1 && (
								<Button onClick={event => handleBtn(event)} className='form'>
									{"Next Step >"}
								</Button>
							)}
							{step === 2 && <FormCheckboxes />}
							{step === 2 && (
								<Button onClick={handleBtn} className='form'>
									{"< Back"}
								</Button>
							)}
							{step === 2 && (
								<Submit onClick={handleSubmit}>Accept All!</Submit>
							)}
						</form>
					</>
				);
			}}
		</ConfigContext.Consumer>
	);
}

export { Form };

import { ConfigContext } from "components/ConfigContextProvider/configContext";
import { Input } from "components/Input/Input";
import css from "./FormInputs.module.css";
import type { FormData, FormDataSingle } from "utils/type";
import { Button } from "components/Button/Button";
import { isTooLong, isTooShort } from "../Validation";
import { handleInputChange } from "react-select/dist/declarations/src/utils";
import { useState } from "react";

interface Props {
	onChange: (
		argHandle: ArgHandleType,
		event: React.ChangeEvent<HTMLInputElement>
	) => void;
	formData: FormData;
	onFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onHandleNext: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

// const onHandleBlur = (
// 	value: string,
// 	maxLength: number,
// 	minLength: number,

// 	touched: boolean
// ) => {
// 	isTooShort(value.length, minLength);
// 	isTouched(value);
// };

type ArgHandleType = keyof FormDataSingle;

type ValidationErrors = Partial<Record<ArgHandleType, string>>; // typescript helpers

// const validateTitle = (title: string) => {
let error = "";
// 	if (isTooShort...) {
// 		eror = "Tytul jest za krotki"
// 	}

// setValidationErrors((state)=> ({
// 	...state,
// 	title: error
// }))
// }

// const validateAll = () => {
// validateTitle();
// validateDescription();
// }

// todo zrobic usevalidation - hook z logika walidacji

function FormInputs({ formData, onChange, onFileChange, onHandleNext }: Props) {
	const [validationErrors, setValidationErrors] = useState<ValidationErrors>();

	return (
		<>
			<ConfigContext.Consumer>
				{config => {
					return (
						<div className={css.formInputWrapper}>
							<div className={css.title}>
								<h2>You can add your offer! </h2>
							</div>
							<div className={css.InputsWrapper}>
								<Input
									id='tilte'
									placeholder='Add title'
									labelText='Title'
									value={formData.title}
									onChange={event => onChange("title", event)}
									onBlur={() => {
										if (isTooLong(formData.title, 10)) {
											setValidationErrors(state => ({
												...state,
												title: "It's too long",
											}));
										}
										if (isTooShort(formData.title, 2)) {
											setValidationErrors(state => ({
												...state,
												title: "It's too short",
											}));
										}
									}}
									error={validationErrors?.title} // "", undefined
								/>
								{/* <Input
									id='City'
									placeholder='City'
									labelText='City'
									value={formData.city}
									onChange={event => onChange("city", event)}
									onBlur={() => onHandleBlur(formData.title.length, 20, 2)}
								/>
								<Input
									id='company'
									placeholder='Write name'
									labelText='Comapany Name'
									value={formData.company}
									onChange={event => onChange("company", event)}
									onBlur={() => onHandleBlur(formData.title.length, 20, 2)}
								/>
								<Input
									id='duration'
									placeholder='Duration'
									value={formData.duration.toString()}
									onChange={event => onChange("duration", event)}
									onBlur={() => onHandleBlur(formData.title.length, 3, 1)}
								/> */}
								{/* <Input
									placeholder='Add Logo your firm'
									type='file'
									onChange={onFileChange}
									// error={fileError}
									// onBlur={(file) => {
									// 	if (!isFileValid(file)) {
									// 		setFileError('Wrong file!')
									// 	}
									// 	if ( !isTooLarge(file)) {
									// 		setFileError('File too large!')
									// 	}
									// }}
									onBlur={() => onHandleBlur(formData.title.length, 3, 1)}
								/> */}
								{/* todo text area */}
								{/* <Input
									id='description'
									placeholder='Add description of offer'
									value={formData.description}
									onChange={event => onChange("description", event)}
									onBlur={() => onHandleBlur(formData.title.length, 3, 1)}
								/>
								<div className={css.buttonWrapper}>
									<div className={css.activeStep} />
									<div className={css.disastiveStep} />
									<Button onClick={onHandleNext} type='form'>
										{"Next Step >"}
									</Button>
								</div> */}
							</div>
						</div>
					);
				}}
			</ConfigContext.Consumer>
		</>
	);
}

export { FormInputs };

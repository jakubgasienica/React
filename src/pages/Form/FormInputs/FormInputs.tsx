import { ConfigContext } from "components/ConfigContextProvider/configContext";
import { Input } from "components/Input/Input";
import css from "./FormInputs.module.css";
import type { FormData } from "utils/type";
import { Button } from "components/Button/Button";
import { isTooLong, isTooShort } from "../Validation";

interface Props {
	onChange: (
		argHandle: ArgHandleType,
		event: React.ChangeEvent<HTMLInputElement>
	) => void;
	formData: FormData;
	onFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onHandleNext: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const onHandleBlur = (
	valueLength: number,
	maxLength: number,
	minLength: number
) => {
	isTooLong(`it's too long`, valueLength, maxLength);
	isTooShort(`it's too short`, valueLength, minLength);
};

type ArgHandleType = "title" | "city" | "duration" | "company" | "description";

function FormInputs({ formData, onChange, onFileChange, onHandleNext }: Props) {
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
									onBlur={() => onHandleBlur(formData.title.length, 20, 2)}
								/>
								<Input
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
								/>
								<Input
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
								/>
								{/* todo text area */}
								<Input
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
								</div>
							</div>
						</div>
					);
				}}
			</ConfigContext.Consumer>
		</>
	);
}

export { FormInputs };

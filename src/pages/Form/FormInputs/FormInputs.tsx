import { ConfigContext } from "components/ConfigContextProvider/configContext";
import { Input } from "components/Input/Input";
import css from "./FormInputs.module.css";
import type { FormData, FormDataSingle } from "utils/type";
import { Button } from "components/Button/Button";
import { useValidationFormInputs } from "../useValidationFormInputs";
import { Textarea } from "components/Textarea/Textarea";

interface Props {
	onChange: (
		onChangeArg: keyof FormDataSingle,
		event: React.ChangeEvent<HTMLInputElement>
	) => void;
	formData: FormData;
	onFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onHandleNext: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	onDescriptionChange: (
		onChangeArg: keyof FormDataSingle,
		event: React.ChangeEvent<HTMLTextAreaElement>
	) => void;
	onHandleDuration: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function FormInputs({
	formData,
	onChange,
	onFileChange,
	onHandleNext,
	onDescriptionChange,
	onHandleDuration,
}: Props) {
	const {
		validateTitle,
		validateCity,
		validateCompany,
		validateDuration,
		validateDescription,
		validationErrors,
		validateAll,
	} = useValidationFormInputs(formData);

	const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
		const isValid = validateAll();
		if (isValid) {
			onHandleNext(e);
		}
	};

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
									onBlur={validateTitle}
									error={validationErrors?.title}
								/>
								<Input
									id='City'
									placeholder='City'
									labelText='City'
									value={formData.city}
									onChange={event => onChange("city", event)}
									onBlur={validateCity}
									error={validationErrors?.city}
								/>
								<Input
									id='company'
									placeholder='Write name'
									labelText='Comapany Name'
									value={formData.company}
									onChange={event => onChange("company", event)}
									onBlur={validateCompany}
									error={validationErrors?.company}
								/>
								<Input
									id='duration'
									placeholder='Duration'
									labelText='Duration of offer'
									value={formData.duration.toString()}
									onChange={event => onHandleDuration(event)}
									onBlur={validateDuration}
									error={validationErrors?.duration}
									type={"date"}
								/>
								<Input
									placeholder='Add Logo your firm'
									type='file'
									onChange={onFileChange}
								/>

								<Textarea
									id='description'
									placeholder='Descripe your offer'
									textLabel='Description'
									rows={5}
									cols={40}
									value={formData.description}
									onChange={event => onDescriptionChange("description", event)}
									onBlur={validateDescription}
									error={validationErrors?.description}
								/>

								<div className={css.buttonWrapper}>
									<div className={css.activeStep} />
									<div className={css.disastiveStep} />
									<Button onClick={handleNext} type='form'>
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

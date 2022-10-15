import { ConfigContext } from "components/ConfigContextProvider/configContext";
import { Input } from "components/Input/Input";
import css from "./Form.module.css";
import { useForm } from "./useForm";

function FormInputs() {
	const { formData, handleChange, handleFileChange } = useForm();
	return (
		<>
			<ConfigContext.Consumer>
				{config => {
					return (
						<div className={css.titleWrapper}>
							<Input
								id='tilte'
								placeholder='Add title'
								labelText='Title'
								value={formData.title}
								onChange={event => handleChange("title", event)}
								maxLength={20}
								minLength={2}
							/>
							<Input
								id='City'
								placeholder='City'
								labelText='City'
								value={formData.city}
								onChange={event => handleChange("city", event)}
								maxLength={20}
								minLength={2}
							/>
							<Input
								id='company'
								placeholder='Write name'
								labelText='Comapany Name'
								value={formData.company}
								onChange={event => handleChange("company", event)}
								maxLength={20}
								minLength={2}
							/>
							<Input
								id='duration'
								placeholder='Duration'
								value={formData.duration.toString()}
								onChange={event => handleChange("duration", event)}
								maxLength={3}
								minLength={1}
							/>
							<Input
								placeholder='Add Logo your firm'
								type='file'
								onChange={handleFileChange}
							/>
							<Input
								id='description'
								placeholder='Add description of offer'
								value={formData.description}
								onChange={event => handleChange("description", event)}
								maxLength={10000}
								minLength={1}
							/>
						</div>
					);
				}}
			</ConfigContext.Consumer>
		</>
	);
}

export { FormInputs };

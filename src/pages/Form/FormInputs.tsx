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
								placeholder='Add title'
								value={formData.title}
								onChange={event => handleChange("title", event)}
							/>
							<Input
								placeholder='City'
								value={formData.city}
								onChange={event => handleChange("city", event)}
							/>
							<Input
								placeholder='Company Name'
								value={formData.company}
								onChange={event => handleChange("company", event)}
							/>
							<Input
								placeholder='Duration'
								value={formData.duration.toString()}
								onChange={event => handleChange("duration", event)}
							/>
							<Input
								placeholder='Add Logo your firm'
								type='file'
								onChange={handleFileChange}
							/>
							<Input
								placeholder='Add description of offer'
								value={formData.description}
								onChange={event => handleChange("description", event)}
							/>
						</div>
					);
				}}
			</ConfigContext.Consumer>
		</>
	);
}

export { FormInputs };

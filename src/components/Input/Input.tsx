import css from "./Input.module.css";
import { Error } from "../Error/Error";
import { ChangeEvent, useState } from "react";
import cn from "classnames";

enum InputState {
	Error,
	Default,
	Checked,
}

type Props = {
	id?: string;
	placeholder: string;
	type?: Type;
	value?: string;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
	labelText?: string;
	error?: string;
	touched?: boolean;
	onBlur?: () => void;
};

type Type = "password" | "text" | "email" | "file" | "checkbox";

function Input({
	id,
	placeholder,
	type = "text",
	labelText,
	value = "",
	onChange,
	onBlur,
	error,
}: Props) {
	const [inputState, setInputState] = useState<InputState>(InputState.Default);
	const [iconState, setIconState] = useState<InputState>(InputState.Default);
	const [touched, setTouched] = useState(false);
	// const handleBlur = () => checkValue(value.length, minLength, maxLength); //setTouched(true)

	function handleChange(event: ChangeEvent<HTMLInputElement>) {
		setTouched(true);
		onChange(event);
	}

	// todo text == errortext
	const classNamesInput = cn({
		[css.error]: !!error,
		[css.default]: !error,
		[css.checked]: touched && !error,
	});

	const classNamesIcon = cn({
		[css.errorIcon]: !!error,
		[css.defaultIcon]: !error,
		[css.checkedIcon]: touched && !error,
	});

	// przeniesc logike wyzej
	console.log(error);
	return (
		<div className={css.wrapper}>
			{/* // todo owrapuj inputa,aby realatywn */}
			<label htmlFor={id}>{labelText}</label>

			<input
				id={id}
				className={classNamesInput}
				placeholder={placeholder}
				type={type}
				onChange={handleChange}
				onBlur={onBlur}
				value={value}
			/>
			<div className={classNamesIcon}>
				<i className='fa-solid fa-xmark' />
			</div>
			{/* dodaj div, wysokic min na span */}
			<span className={css.errorText}>{error}</span>
		</div>
	);
}

export { Input };

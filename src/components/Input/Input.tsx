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
	// const [inputState, setInputState] = useState<InputState>(InputState.Default);
	// const [iconState, setIconState] = useState<InputState>(InputState.Default);
	const [touched, setTouched] = useState(false);
	// const handleBlur = () => checkValue(value.length, minLength, maxLength); //setTouched(true)

	function handleChange(event: ChangeEvent<HTMLInputElement>) {
		setTouched(true);
		onChange(event);

		console.log(`func: ${touched}`);
		console.log(`error state:${!error}`);
	}

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

	console.log(touched);
	console.log(classNamesIcon);

	return (
		<div className={css.wrapper}>
			<label htmlFor={id}>{labelText}</label>
			<div className={css.inputWrapper}>
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
					{classNamesIcon === css.errorIcon && (
						<i className='fa-solid fa-xmark' style={{ color: "#b82727" }} />
					)}
					{classNamesIcon === css.checkedIcon && (
						<i className='fa-solid fa-check' style={{ color: "#48a142" }} />
					)}
				</div>
			</div>
			<div className={css.errorWrapper}>
				<span className={css.errorText}>{error}</span>
			</div>
		</div>
	);
}

export { Input };

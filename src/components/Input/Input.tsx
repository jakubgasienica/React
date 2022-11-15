import css from "./Input.module.css";
import { ChangeEvent, useState } from "react";
import cn from "classnames";

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
	const [touched, setTouched] = useState(false);
	function handleChange(event: ChangeEvent<HTMLInputElement>) {
		setTouched(true);
		onChange(event);
	}

	const classNamesInput = cn(css.default, {
		[css.error]: !!error,
		[css.checked]: touched && !error,
	});

	const classNamesIcon = cn(css.defaultIcon, {
		[css.errorIcon]: !!error,
		[css.checkedIcon]: touched && !error,
	});

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
					{error && <i className='fa-solid fa-xmark' />}
					{!error && touched && <i className='fa-solid fa-check' />}
				</div>
			</div>
			<div className={css.errorWrapper}>
				<span className={css.errorText}>{error}</span>
			</div>
		</div>
	);
}

export { Input };

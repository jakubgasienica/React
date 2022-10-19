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
	onBlur?: React.FocusEventHandler<HTMLInputElement> | undefined;
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
}: Props) {
	const [inputState, setInputState] = useState<InputState>(InputState.Default);
	const [iconState, setIconState] = useState<InputState>(InputState.Default);
	const [text, setText] = useState(" ");
	// const handleBlur = () => checkValue(value.length, minLength, maxLength); //setTouched(true)

	// todo text == errortext
	const classNamesInput = cn({
		// [css.error]: !!error,
		// [css.default]: !error,
		// [css.checked]: touched && !error,
	});

	const classNamesIcon = cn({
		[css.errorIcon]: iconState === InputState.Error,
		[css.defaultIcon]: iconState === InputState.Default,
		[css.checkedIcon]: iconState === InputState.Checked,
	});

	// przeniesc logike wyzej

	return (
		<div className={css.wrapper}>
			{/* // todo owrapuj inputa,aby realatywn */}
			<label htmlFor={id}>{labelText}</label>

			<input
				id={id}
				className={classNamesInput}
				placeholder={placeholder}
				type={type}
				onChange={onChange}
				onBlur={onBlur}
				value={value}
			/>
			<div className={classNamesIcon}>
				<i className='fa-solid fa-xmark' />
			</div>
			{/* dodaj div, wysokic min na span */}
			<span className={css.errorText}>{text}</span>
		</div>
	);
}

export { Input };

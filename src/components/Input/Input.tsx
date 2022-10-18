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
	maxLength?: number;
	minLength?: number;
};

type Type = "password" | "text" | "email" | "file" | "checkbox";

function Input({
	id,
	placeholder,
	type = "text",
	labelText,
	value = "",
	onChange,
	maxLength = 8,
	minLength = 2,
}: Props) {
	const [inputState, setInputState] = useState<InputState>(InputState.Default);
	const [iconState, setIconState] = useState<InputState>(InputState.Default);
	const [text, setText] = useState(" ");

	const classNamesInput = cn({
		[css.error]: inputState === InputState.Error,
		[css.default]: inputState === InputState.Default,
		[css.checked]: inputState === InputState.Checked,
	});

	const classNamesIcon = cn({
		[css.errorIcon]: iconState === InputState.Error,
		[css.defaultIcon]: iconState === InputState.Default,
		[css.checkedIcon]: iconState === InputState.Checked,
	});

	function checkValue(valueLength: number, minLength = 2, maxLength = 10) {
		if (valueLength < minLength) {
			setInputState(0);
			setIconState(0);
			setText(`It's too short`);
		} else if (valueLength > maxLength) {
			setInputState(0);
			setIconState(0);
			setText(`It's too short`);
		} else {
			setInputState(1);
			setIconState(1);
			setText(`OK`);
		}
	}

	return (
		<div className={css.wrapper}>
			<div className={css.wrapperLeft}>
				<label htmlFor={id}>{labelText}</label>
				<input
					id={id}
					className={classNamesInput}
					placeholder={placeholder}
					type={type}
					onChange={onChange}
					onBlur={() => checkValue(value.length, minLength, maxLength)}
					value={value}
				/>
				<div className={classNamesIcon}>
					<i className='fa-solid fa-xmark' />
				</div>
				<span className={css.errorText}>{text}</span>
			</div>
		</div>
	);
}

export { Input };

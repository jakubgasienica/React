import css from "./Input.module.css";
import { Error } from "../Error/Error";
import { ChangeEvent } from "react";

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
	value,
	onChange,
	maxLength = 8,
	minLength = 2,
}: Props) {
	return (
		<div className={css.wrapper}>
			<div className={css.wrapperLeft}>
				<label htmlFor={id}>{labelText}</label>
				<input
					id={id}
					className={css.input}
					placeholder={placeholder}
					type={type}
					onChange={onChange}
					value={value}
				/>
			</div>
			<div className={css.wrapperRight}>
				{value && value.length >= maxLength && <Error>Za długa nazwa</Error>}
				{value && value.length <= minLength && <Error>Za krótka nazwa</Error>}
			</div>
		</div>
	);
}

export { Input };

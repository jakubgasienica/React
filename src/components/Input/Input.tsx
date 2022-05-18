//typ generyczny
//fromularz do genrowania it jobs
//co przyjmuje endpoint

import css from "./Input.module.css";
import { Error } from "../Error/Error";
import { useState, ChangeEvent } from "react";

type Props = {
	placeholder: string;
	type?: Type;
	value?: string;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

type Type = "password" | "text" | "email" | "file";

function Input({ placeholder, type = "text", value, onChange }: Props) {
	return (
		<div className={css.wrapInput}>
			<input
				className={css.input}
				placeholder={placeholder}
				type={type}
				onChange={onChange}
				value={value}
			/>

			{value && value.length >= 8 && <Error>Za długa nazwa</Error>}
			{value && value.length <= 2 && <Error>Za krótka nazwa</Error>}
		</div>
	);
}

/* <span className={css.error}>dodaj tekst</span> */

export { Input };

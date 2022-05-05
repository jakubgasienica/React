// style inputa, dwa propsy max&min lenght - wyswietlanie nazwy to pole musi byc dluzsze niz ... || to pole musi byc krótsze od, pole opcjonalne
// ostylowanie walidacji - bład z animacją, wyjezdzał spod inputa? border: red
// props children
// komponent button z uzyciem props children
// komponent głwony z oferta
// jsx - renderowanie warunkowe

// import { isPropertySignature } from "typescript";
import css from "./Input.module.css";
import { Error } from "../Error/Error";
import { useState, ChangeEvent } from "react";

type Props = {
	placeholder: string;
	type?: Type;
	value: string;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

type Type = "password" | "text" | "email";

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

			{value.length >= 8 && <Error>Za długa nazwa</Error>}
			{value.length <= 2 && <Error>Za krótka nazwa</Error>}
		</div>
	);
}

/* <span className={css.error}>dodaj tekst</span> */

export { Input };

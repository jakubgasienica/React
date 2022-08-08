import { MouseEvent } from "react";
import css from "./Button.module.css";

type Props = {
	children: string;
	onClick: (event: MouseEvent<HTMLButtonElement>) => void;
};

function Button({ children, onClick }: Props) {
	return (
		<button onClick={onClick} className={css.button}>
			{children}
		</button>
	);
}

export { Button };

import css from "./Submit.module.css";
import { MouseEvent } from "react";

type Props = {
	children: String;
	onClick: (event: MouseEvent<HTMLButtonElement>) => void;
};

function Submit({ children, onClick }: Props) {
	return (
		<button onClick={onClick} className={css.submit}>
			{children}
		</button>
	);
}

export { Submit };

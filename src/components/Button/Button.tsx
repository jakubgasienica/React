import { MouseEvent } from "react";
import css from "./Button.module.css";
import cn from "classnames";

type Props = {
	children: string;
	onClick: (event: MouseEvent<HTMLButtonElement>) => void;
	type: TypeBtn;
};

type TypeBtn = "form" | "offer" | "submit";

function Button({ children, onClick, type }: Props) {
	const classNames = cn({
		[css.form]: type === "form",
		[css.offer]: type === "offer",
		[css.submit]: type === "submit",
	});
	return (
		<button onClick={onClick} className={classNames}>
			{children}
		</button>
	);
}

export { Button };

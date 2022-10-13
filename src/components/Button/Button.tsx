import { MouseEvent } from "react";
import css from "./Button.module.css";
import cn from "classnames";

type Props = {
	children: string;
	onClick: (event: MouseEvent<HTMLButtonElement>) => void;
	className: TypeBtn;
};

type TypeBtn = "form" | "offer";

function Button({ children, onClick, className }: Props) {
	const classNames = cn({
		[css.form]: className === "form",
		[css.offer]: className === "offer",
	});
	return (
		<button onClick={onClick} className={classNames}>
			{children}
		</button>
	);
}

export { Button };

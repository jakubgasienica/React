import { useState } from "react";
import css from "./FilterDesktop.module.css";

type Props = {
	text: Text;
	active: boolean;
	onClick: () => void;
};

type Text = "lowest" | "high salary" | "low salary";

type Filter = {
	text: Text;
	check: boolean;
};

function FilterDesktop({ text, active, onClick }: Props) {
	return (
		<div>
			<button className={active ? css.active : css.button} onClick={onClick}>
				{text}
			</button>
		</div>
	);
}

export { FilterDesktop };

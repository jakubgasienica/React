import { useState } from "react";
import css from "./SortDesktop.module.css";

type Props = {
	text: Text;
	active: boolean;
	onClick: () => void | Promise<void>;
};

type Text = "latest" | "high salary" | "low salary";

type Filter = {
	text: Text;
	check: boolean;
};

function SortDesktop({ text, active, onClick }: Props) {
	return (
		<div>
			<button className={active ? css.active : css.button} onClick={onClick}>
				{text}
			</button>
		</div>
	);
}

export { SortDesktop };

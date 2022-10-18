import { useState } from "react";
import css from "./SortDesktop.module.css";
import { Direction } from "components/SortContextProvider/SortContext";
import type { ActiveSort } from "../type";
type Props = {
	onClick: (direction: Direction) => void;
};

function SortDesktop({ onClick }: Props) {
	const [activeSort, setActiveSort] = useState<ActiveSort>("lowest");

	return (
		<div>
			<button
				className={activeSort === "lowest" ? css.active : css.button}
				onClick={() => {
					onClick("desc");
					setActiveSort("lowest");
				}}>
				latest
			</button>
			<button
				className={activeSort === "earliest" ? css.active : css.button}
				onClick={() => {
					onClick("asc");
					setActiveSort("earliest");
				}}>
				earliest
			</button>
		</div>
	);
}

export { SortDesktop };

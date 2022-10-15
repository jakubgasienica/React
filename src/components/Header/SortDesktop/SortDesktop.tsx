import { useState } from "react";
import css from "./SortDesktop.module.css";
import { Direction } from "components/SortContextProvider/SortContext";

type Props = {
	onClick: (direction: Direction) => void;
};

function SortDesktop({ onClick }: Props) {
	const [activeSort, setActiveSort] = useState<number>(0);

	return (
		<div>
			<button
				className={activeSort ? css.active : css.button}
				onClick={() => {
					onClick("desc");
					setActiveSort(0);
				}}>
				latest
			</button>
			<button
				className={activeSort ? css.active : css.button}
				onClick={() => {
					onClick("asc");
					setActiveSort(1);
				}}>
				earliest
			</button>
		</div>
	);
}

export { SortDesktop };

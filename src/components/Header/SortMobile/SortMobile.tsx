import { useState } from "react";
import css from "./SortMobile.module.css";
import { Direction } from "components/SortContextProvider/SortContext";
import type { ActiveSort } from "../type";

type Props = {
	onClick: (direction: Direction) => void;
};

function SortMobile({ onClick }: Props) {
	const [activeSort, setActiveSort] = useState<ActiveSort>("lowest");
	const [popUp, setPopUp] = useState(false);

	return (
		<div className={css.filterSelectBox}>
			<div onClick={() => setPopUp(!popUp)} className={css.filter}>
				{activeSort}
			</div>
			{popUp && (
				<div className={css.popUp}>
					<button
						className={css.button}
						onClick={() => {
							setActiveSort("lowest");
							setPopUp(!popUp);
							onClick("desc");
						}}>
						lowest
					</button>
					<button
						className={css.button}
						onClick={() => {
							setActiveSort("earliest");
							setPopUp(!popUp);
							onClick("asc");
						}}>
						earliest
					</button>
				</div>
			)}
		</div>
	);
}

export { SortMobile };

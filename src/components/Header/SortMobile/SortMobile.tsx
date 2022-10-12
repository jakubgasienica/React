import { useState } from "react";
import css from "./SortMobile.module.css";

type Filter = "lowest" | "high salary" | "low salary";

function SortMobile() {
	const [filter, setFilter] = useState<Filter>("lowest");
	const [popUp, setPopUp] = useState(false);

	return (
		<div className={css.filterSelectBox}>
			<div onClick={() => setPopUp(!popUp)} className={css.filter}>
				{filter}
			</div>
			{popUp && (
				<div className={css.popUp}>
					<button
						className={css.button}
						onClick={() => {
							setFilter("lowest");
							setPopUp(!popUp);
						}}>
						lowest
					</button>
					<button
						className={css.button}
						onClick={() => {
							setFilter("high salary");
							setPopUp(!popUp);
						}}>
						high salary
					</button>
					<button
						className={css.button}
						onClick={() => {
							setFilter("low salary");
							setPopUp(!popUp);
						}}>
						low salary
					</button>
				</div>
			)}
		</div>
	);
}

export { SortMobile };

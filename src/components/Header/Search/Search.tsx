import { FilterContext } from "components/FilterContextProvider/filterContext";
import { ChangeEvent, useContext, useState } from "react";
import css from "./Search.module.css";

function Search() {
	const { setFilter } = useContext(FilterContext);
	const [isActive, setActive] = useState(true);

	function searchOffer(e: ChangeEvent<HTMLInputElement>) {
		setFilter(e.target.value);
	}

	return (
		<div className={css.searchBox}>
			<input
				className={css.input}
				onChange={searchOffer}
				onFocus={() => {
					setActive(false);
				}}
				onBlur={() => setActive(true)}
			/>
			<div className={isActive ? css.searchIcon : css.searchIconNoDisplay}>
				<i className='fa-solid fa-magnifying-glass' />
			</div>
		</div>
	);
}

export { Search };

import { FilterContext } from "components/FilterContextProvider/filterContext";
import { ChangeEvent, useContext } from "react";
import css from "./Search.module.css";
import cn from "classnames";

function Search() {
	const { setFilter } = useContext(FilterContext);

	const classNames = cn({
		[css.searchIcon]: [css.searchIconNoDisplay],
	});

	function searchOffer(e: ChangeEvent<HTMLInputElement>) {
		setFilter(e.target.value);
	}
	return (
		<div className={css.searchBox}>
			{/* // TODO: use Input component */}
			<input className={css.input} onChange={e => searchOffer(e)}></input>
			<div className={classNames}>
				<i className='fa-solid fa-magnifying-glass'></i>
			</div>
		</div>
	);
}

export { Search };

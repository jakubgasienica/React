import css from "./Header.module.css";
import logo from "./logo.png";
import { ChangeEvent, useContext } from "react";
import { FilterContext } from "components/FilterContextProvider/filterContext";

function Header() {
	const { setFilter } = useContext(FilterContext);

	function searchOffer(e: ChangeEvent<HTMLInputElement>) {
		setFilter(e.target.value);
	}

	return (
		<div className={css.header}>
			<div className={css.logo}>
				<img src={logo} alt='work with it' />
			</div>
			<div className={css.searchBox}>
				<input className={css.input} onChange={e => searchOffer(e)}></input>
				<div className={css.searchIcon}>
					<i className='fa-solid fa-magnifying-glass'></i>
				</div>
			</div>
			<div className={css.filter}>
				<div className={css.filterBoxButtons}>
					<button className={css.filterButton}>latest</button>
					{/* <button className={css.filterBoxButton}>highest salary</button>
					<button className={css.filterBoxButton}>lowest salary</button> */}
				</div>
			</div>
		</div>
	);
}

export { Header };

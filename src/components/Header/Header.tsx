import css from "./Header.module.css";
import logo from "./logo.png";
import { useContext } from "react";
import { Search } from "./Search/Search";
import { SortDesktop } from "./SortDesktop/SortDesktop";
import { SortMobile } from "./SortMobile/SortMobile";
import {
	SortContext,
	Direction,
} from "components/SortContextProvider/SortContext";

function Header() {
	const { setSortingMethod } = useContext(SortContext);

	function handleSortChange(direction: Direction) {
		setSortingMethod(direction);
		console.log("change sort");
	}

	return (
		<header className={css.header}>
			<div className={css.logo}>
				<img src={logo} alt='work with it' />
			</div>
			<Search />
			<div className={css.sortContainerDesktop}>
				<SortDesktop onClick={handleSortChange} />
			</div>
			<div className={css.sortContainerMobile}>
				<SortMobile onClick={handleSortChange} />
			</div>
		</header>
	);
}

export { Header };

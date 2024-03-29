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
import { Link } from "react-router-dom";

function Header() {
	const { setSortingMethod } = useContext(SortContext);

	function handleSortChange(direction: Direction) {
		setSortingMethod(direction);
	}

	return (
		<header className={css.header}>
			<Link to='/'>
				<div className={css.logo}>
					<img src={logo} alt='work with it' />
				</div>
			</Link>

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

import css from "./Header.module.css";
import logo from "./logo.png";
import { ChangeEvent, useContext, useState } from "react";
import { FilterContext } from "components/FilterContextProvider/filterContext";
import { Search } from "./Search/Search";
import { FilterDesktop } from "./FilterDesktop/FilterDesktop";
import { FilterMobile } from "./FilterMobile/FilterMobile";

function Header() {
	const [activeFilter, setActiveFilter] = useState<number>(0);

	return (
		<header className={css.header}>
			<div className={css.logo}>
				<img src={logo} alt='work with it' />
			</div>
			<Search />
			<div className={css.filterBoxButtonsDesktop}>
				{/* TODO: change name to sort */}
				<FilterDesktop
					text='lowest'
					active={activeFilter === 0}
					onClick={() => setActiveFilter(0)}
				/>
				<FilterDesktop
					text='high salary'
					active={activeFilter === 1}
					onClick={() => setActiveFilter(1)}
				/>
				<FilterDesktop
					text='low salary'
					active={activeFilter === 2}
					onClick={() => setActiveFilter(2)}
				/>
			</div>
			<div className={css.filterBoxButtonsMobile}>
				<FilterMobile />
			</div>
		</header>
	);
}

export { Header };

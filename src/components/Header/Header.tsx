import css from "./Header.module.css";
import logo from "./logo.png";
import { useContext, useState } from "react";
import { Search } from "./Search/Search";
import { SortDesktop } from "./SortDesktop/SortDesktop";
import { SortMobile } from "./SortMobile/SortMobile";
import {
	SortContext,
	OrderBy,
} from "components/SortContextProvider/SortContext";

function Header() {
	const [activeSort, setActiveSort] = useState<number>(0);
	const { setSort, sort } = useContext(SortContext);
	// TODO: change name of sort -sorting method  , orderBy na diresction
	async function handleSortChange(orderBy: OrderBy) {
		setSort(orderBy);
	}

	return (
		<header className={css.header}>
			<div className={css.logo}>
				<img src={logo} alt='work with it' />
			</div>
			<Search />
			<div className={css.sortContainerDesktop}>
				<SortDesktop
					text='latest'
					active={activeSort === 0}
					onClick={() => {
						setActiveSort(0);
						handleSortChange("asc");
					}}
				/>
				<SortDesktop
					text='high salary'
					active={activeSort === 1}
					onClick={() => {
						setActiveSort(1);
						handleSortChange("desc");
					}}
				/>
				<SortDesktop
					text='low salary'
					active={activeSort === 2}
					onClick={() => setActiveSort(2)}
				/>
			</div>
			<div className={css.sortContainerMobile}>
				<SortMobile></SortMobile>
			</div>
		</header>
	);
}

export { Header };

import css from "./Header.module.css";
import logo from "./logo.png";
import Select, { Options } from "react-select";

// const options: Options<{ value: string; label: string }> = [
// 	{ value: "latest", label: "latest" },
// 	{ value: "highest", label: "highest salary" },
// 	{ value: "lowest", label: "lowest salary" },
// ];

function Header() {
	return (
		<div className={css.header}>
			<div className={css.logo}>
				<img src={logo} alt='work with it' />
			</div>
			<div className={css.searchBox}>
				<div className={css.searchIinputContainer}>
					<input className={css.input} />
				</div>
				<i className='fa-solid fa-magnifying-glass'></i>
			</div>
			<div className={css.filter}>
				{/* <Select
					className={css.filterBoxSelect}
					value={options.value}
					options={options}
					defaultValue={options[1]}
				/> */}
				<i className='fa-solid fa-filter'></i>
				<div className={css.filterBoxButtons}>
					<button className={css.filterBoxButton}>latest</button>
					<button className={css.filterBoxButton}>highest salary</button>
					<button className={css.filterBoxButton}>lowest salary</button>
				</div>
			</div>
		</div>
	);
}

export { Header };

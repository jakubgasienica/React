import css from "./Content.module.css";
import logo from "./logo.png";

function Content() {
	return (
		<div className={css.wrapper}>
			<div className={css.logo}>
				<img className={css.img} src={logo} />
			</div>

			<h3 className={css.title}>Junior front-end developer</h3>

			<div className={css.city}>
				<p className={css.paragraph}>Wrocław</p>
			</div>

			<div className={css.stack}>
				<p className={css.paragraph}>Java Script</p>
			</div>

			<div className={css.salary}>
				<p className={css.paragraph}>10000 PLN</p>
			</div>

			<div className={css.type}>
				<p className={css.paragraph}>Full time</p>
			</div>
		</div>
	);
}

export { Content };

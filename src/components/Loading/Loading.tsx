import css from "./Loading.module.css";

function Loading() {
	return (
		<div className={css.wrapper}>
			<h3 className={css.paragraph}>Just a second, please</h3>
			<div className={css.wrapperCircle}>
				<span className={css.circle} />
				<span className={css.circle} />
				<span className={css.circle} />
				<span className={css.circle} />
			</div>
		</div>
	);
}

export { Loading };

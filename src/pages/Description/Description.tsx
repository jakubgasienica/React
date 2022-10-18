import css from "./Description.module.css";

function Description() {
	const queryParams = new URLSearchParams(window.location.search);
	console.log(queryParams.get(""));
	return (
		<>
			<div className={css.wrapper}>Description of offer</div>
		</>
	);
}

export { Description };

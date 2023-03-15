import { Button } from "components/Button/Button";
import css from "./SuccessState.module.css";
import { Link } from "react-router-dom";

function SuccessState() {
	return (
		<div className={css.box}>
			<div className={css.boxInfo}>
				<h2>Offer is successful upload</h2>
				<i className='fa-regular fa-circle-check' />
			</div>
			<Link to='/' className={css.link}>
				Back Home
			</Link>
		</div>
	);
}

export { SuccessState };

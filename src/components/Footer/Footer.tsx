import css from "./Footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
	return (
		<div className={css.footer}>
			<div className={css.link}>
				<Link to='/'>Home</Link>
				<Link to='form'>Form</Link>
			</div>
		</div>
	);
}

export { Footer };

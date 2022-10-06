import css from "./Footer.module.css";
import { Link } from "react-router-dom";
import logo from "./logo.png";

function Footer() {
	return (
		<div className={css.footer}>
			<div>
				<img className={css.logo} src={logo} alt='work with it' />
			</div>
			<div className={css.link}>
				<Link to='/'>Home</Link>
				<Link to='form'>Form</Link>
			</div>
		</div>
	);
}

export { Footer };

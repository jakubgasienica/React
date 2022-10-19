import css from "./Description.module.css";
import { useParams } from "react-router-dom";

function Description() {
	const { id } = useParams();

	return (
		<>
			<div className={css.wrapper}>Description of offer {id}</div>
		</>
	);
}

export { Description };

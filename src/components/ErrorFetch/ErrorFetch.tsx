import cn from "classnames";
import css from "./ErrorFetch.module.css";

enum Error {
	Delete,
	FetchOffers,
}

type Props = {
	type: Error;
};

function ErrorFetch({ type }: Props) {
	const classNames = cn({
		[css.delete]: type === Error.Delete,
		[css.fetchOffers]: type === Error.FetchOffers,
	});

	let text = "";
	if (type === Error.Delete) {
		text = "This offer can't be deleted";
	} else if (type === Error.FetchOffers) {
		text = "Offers can't be render";
	}

	return (
		<div className={classNames}>
			<p>{text}</p>
		</div>
	);
}

export { ErrorFetch, Error };

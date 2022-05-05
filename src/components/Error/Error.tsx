import css from "./Error.module.css";

type Props = {
	children: string;
};

function Error(props: Props) {
	return (
		<div className={css.errorBox}>
			<p className={css.errorText}>{props.children}</p>
		</div>
	);
}

export { Error };

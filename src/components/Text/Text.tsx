import cn from "classnames";
import css from "./Text.module.css";

type Colors = "blue" | "red" | "green";

type Props = {
	color?: Colors;
};

// children prop

function Text({ color }: Props) {
	const classNames = cn({
		text: true,
		[css.red]: color === "red",
		[css.blue]: color === "blue",
	});

	return <span className={classNames}>{color}</span>;
}

export { Text };

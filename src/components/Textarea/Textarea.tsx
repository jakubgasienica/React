import css from "./Textarea.module.css";
import cn from "classnames";
import { ChangeEvent, useState } from "react";

type Props = {
	id: string;
	textLabel: string;
	rows: number;
	cols: number;
	placeholder: string;
	value: string;
	onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
	onBlur: React.FocusEventHandler<HTMLTextAreaElement>;
	error?: string;
};

function Textarea({
	id,
	textLabel,
	rows,
	cols,
	placeholder,
	value,
	onChange,
	onBlur,
	error,
}: Props) {
	const [touched, setTouched] = useState(false);

	function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
		setTouched(true);
		onChange(event);
	}

	const classNames = cn(css.textarea, {
		[css.error]: !!error,
		[css.checked]: touched && !error,
	});

	return (
		<div className={css.wrapper}>
			<label htmlFor={id}> {textLabel} </label>
			<textarea
				id={id}
				rows={rows}
				cols={cols}
				placeholder={placeholder}
				value={value}
				onChange={handleChange}
				onBlur={onBlur}
				className={classNames}
			/>
			<div className={css.errorWrapper}>
				<span className={css.errorText}>{error}</span>
			</div>
		</div>
	);
}

export { Textarea };

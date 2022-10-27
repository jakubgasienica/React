import css from "./Textarea.module.css";

type Props = {
	id: string;
	textLabel: string;
	rows: number;
	cols: number;
	placeholder: string;
	value: string;
	onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
	onBlur: React.FocusEventHandler<HTMLTextAreaElement>;
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
}: Props) {
	return (
		<>
			<label htmlFor={id}> {textLabel} </label>
			<textarea
				id={id}
				rows={rows}
				cols={cols}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				onBlur={onBlur}
				className={css.textarea}
			/>
		</>
	);
}

export { Textarea };

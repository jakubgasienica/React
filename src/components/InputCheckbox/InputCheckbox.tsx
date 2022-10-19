import css from "./InputCheckbox.module.css";

type Props = {
	checked: boolean;
	id: string;
	onChange: React.ChangeEventHandler<HTMLInputElement>;
	value: number;
	htmlFor: string;
	children: string;
};

function InputCheckbox({ checked, id, onChange, value, children }: Props) {
	return (
		<div className={css.box}>
			<input
				type='checkbox'
				checked={checked}
				id={id}
				onChange={onChange}
				value={value}
			/>

			<label htmlFor={id}>{children}</label>
		</div>
	);
}

export { InputCheckbox };

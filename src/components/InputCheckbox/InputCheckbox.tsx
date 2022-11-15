import css from "./InputCheckbox.module.css";

type Props = {
	checked: boolean;
	id: string;
	onChange: React.ChangeEventHandler<HTMLInputElement>;
	value: number;
	htmlFor: string;
	children: string;
};

// 1. div + input hidden/checkbox z height/width 0
// 2. aria (aria-checked, aria-label, aria-role) i role - atrybuty accessibility
// 3. tabIndex
// 4. onFocus / addEventListener('focus') z divem
// 5. click na checkbox,
// Custom checkbox react accessible

function InputCheckbox({ checked, id, onChange, value, children }: Props) {
	return (
		<div className={css.box}>
			<input
				checked={checked}
				id={id}
				onChange={onChange}
				value={value}
				className={css.button}
				type='checkbox'
			/>

			<label htmlFor={id}>{children}</label>
		</div>
	);
}

export { InputCheckbox };

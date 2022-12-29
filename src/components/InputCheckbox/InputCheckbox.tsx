import css from "./InputCheckbox.module.css";

type Props = {
	checked: boolean;
	id: string;
	onChange: (checked: boolean) => void;
	value: number;
	htmlFor: string;
	children: string;
};

function InputCheckbox({ checked, id, onChange, value, children }: Props) {
	function handleChecked() {
		onChange(!checked);
	}

	return (
		<div className={css.box}>
			<div className={css.boxCheckbox}>
				<input
					checked={checked}
					id={id}
					onChange={handleChecked}
					value={value}
					className={css.checkbox}
					type='checkbox'
				/>
				{checked && (
					<div className={css.checkboxChecked} onClick={handleChecked}>
						<div className={css.checkboxCheckedAfter} />
					</div>
				)}
				{!checked && (
					<div className={css.checkboxNotChecked} onClick={handleChecked} />
				)}
			</div>
			<label htmlFor={id} className={css.label}>
				{children}
			</label>
		</div>
	);
}

export { InputCheckbox };

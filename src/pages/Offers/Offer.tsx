import { Button } from "components/Button/Button";
import { useState, MouseEvent } from "react";
import css from "./Offers.module.css";
import { getDatePublished, getDateActive } from "../../utils/getDate";

type Props = {
	id: number;
	title: string;
	thumb: string;
	logo: string;
	companyCity: string;
	categories: {
		id: number;
		name: string;
	}[];
	salary: {
		name: string;
		salary: string;
	}[];

	benefits: {
		id: number;
		name: string;
	}[];
	date: Date;
	duration: number;
	onGoToDescription: (id: number) => void;
	onFetchDelete: (id: number) => Promise<void>;
};

function Offer({
	id,
	title,
	thumb,
	logo,
	companyCity,
	categories,
	salary,
	benefits,
	date,
	duration,
	onGoToDescription,
	onFetchDelete,
}: Props) {
	const [extraFunc, setExtraFunc] = useState(false);
	console.log(thumb);
	return (
		<div
			className={css.offer}
			onClick={() => {
				setExtraFunc(!extraFunc);
			}}>
			<div
				className={
					extraFunc ? css.offerWrapperDisplayExtras : css.offerWrapper
				}>
				<div className={css.topOfferBox}>
					<h3 className={css.title}>{title}</h3>
					<img
						className={css.img}
						src={thumb}
						onError={event => {
							(event.target as HTMLImageElement).src = logo;
						}}
						alt='logo'
					/>
				</div>
				<div className={css.middleOfferBox}>
					<div className={css.properties}>
						<i className='fa-solid fa-location-dot' />
						<p className={css.paragraph}>{companyCity}</p>
					</div>
					<div className={css.properties}>
						<i className='fa-solid fa-laptop-code' />
						<p className={css.paragraph}>
							{categories.map(cat => cat.name).join(", ")}{" "}
						</p>
					</div>
					<div className={css.properties}>
						<i className='fa-solid fa-dollar-sign' />
						<p className={css.paragraph}>{salary.map(s => s.name)}:</p>
						<p className={css.paragraph}>{salary.map(s => s.salary)}</p>
					</div>
					<div className={css.properties}>
						<i className='fa-solid fa-plus' />
						<p className={css.paragraph}>
							{benefits.map(benefit => benefit.name).join(", ")}
						</p>
					</div>
				</div>
				<div className={css.bottomOfferBox}>
					<p className={css.dateText}>Published: {getDatePublished(date)}</p>
					<p className={css.dateText}>
						Active: {getDateActive(date, duration)}
					</p>
				</div>
			</div>
			<div
				className={
					extraFunc ? css.popUpExtraFunc : css.popUpExtraFuncNoDisplay
				}>
				<div className={css.delete}>
					<Button
						onClick={(event: MouseEvent<HTMLButtonElement>) => {
							event.stopPropagation();
							onFetchDelete(id);
						}}
						type='offer'>
						Delete this offer, if you are not interested
					</Button>
				</div>
				<div
					className={css.buttonDescription}
					onClick={() => onGoToDescription(id)}>
					Go to description
				</div>
			</div>
		</div>
	);
}

export { Offer };

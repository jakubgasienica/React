import css from "./Offers.module.css";
import logo from "./logo.png";
import { useOffers } from "./useOffers";
import { Button } from "components/Button/Button";
import { ErrorFetch } from "components/ErrorFetch/ErrorFetch";
import { MouseEvent, useState } from "react";
import { isFunctionExpression } from "typescript";

function Offers() {
	const { error, loading, offers, fetchDelete, goToDescription } = useOffers();
	const [extraFunc, setExtraFunc] = useState(false);

	if (error) {
		return <ErrorFetch type={error} />;
	}

	if (loading) {
		return <div>Wczytywanie...</div>;
	}
	function getDatePublished(date: Date) {
		// przenieśc do utils
		const months = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December",
		];
		let month = months[date.getMonth()];
		return `${date.getDate()} ${month}`;
	}
	function getDateActive(date: Date) {
		const months = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December",
		];
		let month: string;
		if (date.getMonth() === months.length) {
			month = months[0];
		} else {
			month = months[date.getMonth() + 1];
		}
		return `${date.getDate()} ${month}`;
	}
	return (
		<div className={css.offers}>
			{offers.map(offer => (
				<div
					//  offer
					className={css.wrapper}
					key={offer.id}
					onClick={() => {
						// goToDescription(offer.id);
						console.log(offer.date.getDay());
						setExtraFunc(!extraFunc)!;
					}}>
					<div
						className={
							extraFunc ? css.offerWrapperDisplayExtras : css.offerWrapper
						}
						key={offer.id}>
						<div className={css.topOfferBox}>
							<h3 className={css.title}>{offer.title}</h3>
							<img
								className={css.img}
								src={offer.thumb}
								onError={event => {
									(event.target as HTMLImageElement).src = logo;
								}}
								alt='logo'
							/>
						</div>
						<div className={css.middleOfferBox}>
							<div className={css.properties}>
								<i className='fa-solid fa-location-dot'></i>
								<p className={css.paragraph}>{offer.companyCity}</p>
							</div>
							<div className={css.properties}>
								<i className='fa-solid fa-laptop-code'></i>
								<p className={css.paragraph}>
									{offer.categories.map(cat => cat.name).join(", ")}
								</p>
							</div>
							<div className={css.properties}>
								<i className='fa-solid fa-dollar-sign'></i>
								<p className={css.paragraph}>
									{offer.salary.map(s => s.name)}:
								</p>
								<p className={css.paragraph}>
									{offer.salary.map(s => s.salary)}
								</p>
							</div>
							<div className={css.properties}>
								<i className='fa-solid fa-plus'></i>
								<p className={css.paragraph}>
									{offer.benefits.map(benefit => benefit.name).join(", ")}
								</p>
							</div>
						</div>
						<div className={css.bottomOfferBox}>
							<p className={css.dateText}>
								Published: {getDatePublished(offer.date)}
							</p>
							<p className={css.dateText}>
								Active: {getDateActive(offer.date)}
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
									// fetchDelete(offer.id);
								}}>
								Delete this offer, if you are not interested
							</Button>
						</div>
						<div className={css.buttonDescription}>Go to description</div>
					</div>
				</div>
			))}
		</div>
	);
}

export { Offers };

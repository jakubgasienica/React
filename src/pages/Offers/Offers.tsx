import css from "./Offers.module.css";
import logo from "./logo.png";
import { useOffers } from "./useOffers";
import { Button } from "components/Button/Button";
import { ErrorFetch } from "components/ErrorFetch/ErrorFetch";
import { MouseEvent, useState } from "react";
import { Loading } from "components/Loading/Loading";

function Offers() {
	const {
		error,
		loading,
		offers,
		fetchDelete,
		goToDescription,
		getDateActive,
		getDatePublished,
	} = useOffers();
	const [extraFunc, setExtraFunc] = useState(false);
	//Todo stworzyc offer z calym jsx
	if (error) {
		return <ErrorFetch type={error} />;
	}

	if (loading) {
		return <Loading />;
	}

	return (
		<div className={css.offers}>
			{offers.map(offer => (
				<div
					className={css.offer}
					key={offer.id}
					onClick={() => {
						setExtraFunc(!extraFunc);
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
								<i className='fa-solid fa-location-dot' />
								<p className={css.paragraph}>{offer.companyCity}</p>
							</div>
							<div className={css.properties}>
								<i className='fa-solid fa-laptop-code' />
								<p className={css.paragraph}>
									{offer.categories.map(cat => cat.name).join(", ")}
								</p>
							</div>
							<div className={css.properties}>
								<i className='fa-solid fa-dollar-sign' />
								<p className={css.paragraph}>
									{offer.salary.map(s => s.name)}:
								</p>
								<p className={css.paragraph}>
									{offer.salary.map(s => s.salary)}
								</p>
							</div>
							<div className={css.properties}>
								<i className='fa-solid fa-plus' />
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
								Active: {getDateActive(offer.date, offer.duration)}
							</p>
						</div>
					</div>
					{/* {extraFunc ? <></> : <></>} */}
					<div
						className={
							extraFunc ? css.popUpExtraFunc : css.popUpExtraFuncNoDisplay
						}>
						<div className={css.delete}>
							<Button
								onClick={(event: MouseEvent<HTMLButtonElement>) => {
									event.stopPropagation();
									fetchDelete(offer.id);
								}}
								type='offer'>
								Delete this offer, if you are not interested
							</Button>
						</div>
						<div
							// TODO wrz	uc to na button
							className={css.buttonDescription}
							onClick={() => goToDescription(offer.id)}>
							Go to description
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

export { Offers };

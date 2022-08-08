import css from "./Offers.module.css";
import logo from "./logo.png";
import { useOffers } from "./useOffers";
import { Button } from "components/Button/Button";
import { ErrorFetch } from "components/ErrorFetch/ErrorFetch";

function Offers() {
	const { error, loading, offers, fetchDelete } = useOffers();

	if (error) {
		return <ErrorFetch type={error} />;
	}

	if (loading) {
		return <div>Wczytywanie...</div>;
	}

	return (
		<>
			{offers.map(offer => (
				<div className={css.wrapper} key={offer.id}>
					<div className={css.offerWrapper} key={offer.id}>
						<div className={css.logo}>
							<img
								className={css.img}
								src={offer.thumb}
								onError={event => {
									(event.target as HTMLImageElement).src = logo;
								}}
								alt='logo'
							/>
						</div>
						<h3 className={css.title}>{offer.title}</h3>
						<div className={css.city}>
							<p className={css.paragraph}>{offer.companyCity}</p>
						</div>
						<div className={css.stack}>
							<p className={css.paragraph}>
								{offer.categories.map(cat => cat.name).join(", ")}
							</p>
						</div>
						<div className={css.salary}>
							<p className={css.paragraph}>{offer.salary.map(s => s.salary)}</p>
						</div>
						<div className={css.benefits}>
							<p className={css.paragraph}>
								{offer.benefits.map(benefit => benefit.name).join(", ")}
							</p>
						</div>
					</div>
					<div className={css.delete}>
						<Button
							onClick={() => {
								console.log("delete");
								fetchDelete(offer.id);
							}}>
							X
						</Button>
					</div>
				</div>
			))}
		</>
	);
}

export { Offers };

import css from "./Offers.module.css";
import logo from "./logo.png";
import { useOffers } from "./useOffers";
import { ErrorFetch } from "components/ErrorFetch/ErrorFetch";
import { Loading } from "components/Loading/Loading";
import { Offer } from "./Offer";

function Offers() {
	const { error, loading, offers, fetchDelete, goToDescription } = useOffers();
	if (error) {
		return <ErrorFetch type={error} />;
	}

	if (loading) {
		return <Loading />;
	}

	return (
		<div className={css.offers}>
			{offers.map(offer => (
				<Offer
					key={offer.id}
					id={offer.id}
					title={offer.title}
					thumb={offer.thumb}
					logo={logo}
					companyCity={offer.companyCity}
					categories={offer.categories}
					salary={offer.salary}
					benefits={offer.benefits}
					date={offer.date}
					duration={offer.duration}
					onFetchDelete={fetchDelete}
					onGoToDescription={goToDescription}
				/>
			))}
		</div>
	);
}

export { Offers };

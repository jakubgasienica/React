import css from "./Offers.module.css";
import logo from "./logo.png";
import { useOffers } from "./useOffers";

// import { ConfigContext } from "../../components/ConfigContextProvider/configContext";

// callback
// batch state
// context
// hook conditional render
// REST

function Offers() {
	const { error, loading, offers } = useOffers();

	if (error) {
		return <div>Error</div>;
	}

	if (loading) {
		return <div>Wczytywanie...</div>;
	}

	return (
		<>
			{offers.map(offer => (
				<div className={css.wrapper} key={offer.id}>
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
			))}
		</>
	);
}

export { Offers };

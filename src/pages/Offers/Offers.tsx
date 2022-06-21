import css from "./Offers.module.css";
import logo from "./logo.png";
import { useState, useEffect } from "react";
// import { ConfigContext } from "../../components/ConfigContextProvider/configContext";

type ResponseData = {
	data: {
		records: {
			id: number;
			benefits: {
				id: number;
				name: string;
			}[];
			categories: {
				id: number;
				name: string;
			}[];
			company_city: string;
			company_name: string;
			description: string;
			duration: number;
			salary: {
				name: string;
				salary_from: string;
				salary_to: string;
			}[];
			seniority: {
				id: number;
				name: string;
			}[];
			title: string;
			date: string;
			thumb: string;
		}[];
	};
};

type Offer = {
	id: number;
	benefits: {
		id: number;
		name: string;
	}[];
	categories: {
		id: number;
		name: string;
	}[];
	companyCity: string;
	companyName: string;
	description: string;
	duration: number;
	salary: {
		name: string;
		salary: string;
	}[];
	title: string;
	date: Date;
	thumb: string;
};

function mapResponse(data: ResponseData): Offer[] {
	return data.data.records.map(record => ({
		id: record.id,
		date: new Date(record.date),
		title: record.title,
		categories: record.categories.map(cat => ({
			id: cat.id,
			name: cat.name,
		})),
		companyCity: record.company_city,
		companyName: record.company_name,
		description: record.description,
		duration: record.duration,
		salary: record.salary.map(s => ({
			name: s.name,
			salary: `${s.salary_from} - ${s.salary_to} PLN`,
		})),
		benefits: record.benefits,
		thumb: record.thumb ? `data:image/jpg;base64,${record.thumb}` : `${logo}`,
	}));
}

// callback
// batch state
// context
// hook conditional render
// REST

function Offers() {
	const [loading, setLoading] = useState(false);
	const [offers, setOffers] = useState<Offer[]>([]);
	const [error, setError] = useState(false);
	// const value = useContext(ConfigContext);

	useEffect(() => {
		setLoading(true);
		setError(false);
		fetch("http://localhost:4000/offers?limit=10")
			.then(response => response.json())
			.then(data => setOffers(mapResponse(data)))
			.catch(error => setError(true))
			.finally(() => {
				setLoading(false);
			});
	}, []);

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

export { Offers, mapResponse };

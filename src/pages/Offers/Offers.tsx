import css from "../Offers/Offers.module.css";
import logo from "../Offers/logo.png";
import { useState, useEffect } from "react";

type ResponseData = {
	data: {
		records: {
			id: number;
			benefits: {
				id: number;
				name: string;
			}[];
			salary: {
				name: string;
				salary_from: string;
				salary_to: string;
			}[];
			title: string;
			date: string;
		}[];
	};
};

type Offer = {
	id: number;
	benefits: {
		id: number;
		name: string;
	}[];
	salary: {
		name: string;
		salaryFrom: string;
		salaryTo: string;
	}[];
	title: string;
	date: Date;
};

function mapResponse(data: ResponseData): Offer[] {
	return data.data.records.map(record => ({
		id: record.id,
		date: new Date(record.date),
		title: record.title,
		salary: record.salary.map(s => ({
			name: s.name,
			salaryFrom: s.salary_from,
			salaryTo: s.salary_to,
		})),
		benefits: record.benefits,
	}));
}

function Offers() {
	const [offers, setOffers] = useState<Offer[]>([]);

	useEffect(() => {
		fetch("http://localhost:4000/offers?limit=10")
			.then(response => response.json())
			.then(data => setOffers(mapResponse(data)));
	}, []);

	return (
		<>
			{offers.map(offer => (
				<div className={css.wrapper} key={offer.id}>
					<div className={css.logo}>
						<img className={css.img} src={logo} />
					</div>
					<h3 className={css.title}>{offer.title}</h3>
					<div className={css.city}>
						<p className={css.paragraph}>Wrocław</p>
					</div>
					<div className={css.stack}>
						<p className={css.paragraph}>Java Script</p>
					</div>
					<div className={css.salary}>
						<p className={css.paragraph}>10000 PLN</p>
					</div>
					<div className={css.type}>
						<p className={css.paragraph}>Full time</p>
					</div>
				</div>
			))}
		</>
	);
}

export { Offers };

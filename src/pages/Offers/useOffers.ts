import { useState, useEffect } from "react";
import logo from "./logo.png";

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

export const useOffers = () => {
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

	return {
		loading,
		offers,
		error,
	};
};

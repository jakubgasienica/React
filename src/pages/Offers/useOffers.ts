import { useState, useEffect, useContext } from "react";
import logo from "./logo.png";
import { Error } from "components/ErrorFetch/ErrorFetch";
import { fetchOffers } from "utils/fetchOffers";
import { Offer } from "utils/type";
import { FilterContext } from "components/FilterContextProvider/filterContext";
import { useNavigate } from "react-router-dom";
import { SortContext } from "components/SortContextProvider/SortContext";
import { fetchSort } from "utils/fetchSort";

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
				salary_from: number;
				salary_to: number;
			}[];
			seniority: {
				id: number;
				name: string;
			};
			title: string;
			date: string;
			thumb: string;
		}[];
	};
};

export function mapResponse(data: ResponseData): Offer[] {
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
	const [error, setError] = useState<Error | null>(null);
	const navigate = useNavigate();
	const { filter } = useContext(FilterContext);
	const { sort } = useContext(SortContext);

	function goToDescription(id: number) {
		navigate(`/offer/${id}`);
	}

	async function fetchDelete(id: number) {
		const params = {
			method: "DELETE",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		};
		try {
			await fetch(`http://localhost:4000/offers/${id}`, params);
			setOffers(offers.filter((offer: { id: number }) => id !== offer.id));
		} catch (e) {
			setError(Error.Delete);
		} finally {
		}
	}

	useEffect(() => {
		const doFetch = async () => {
			try {
				setLoading(true);
				setError(null);
				const response = await fetchOffers(filter, sort);
				const json = await response.json();
				setOffers(mapResponse(json));
			} catch {
				setError(Error.FetchOffers);
			} finally {
				setLoading(false);
			}
		};

		doFetch();
	}, [filter, sort]);

	return {
		loading,
		offers,
		error,
		fetchDelete,
		goToDescription,
	};
};

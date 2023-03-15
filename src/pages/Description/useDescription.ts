import { ResponseData, Offer } from "utils/type";
import { useEffect, useState } from "react";
import { fetchDescription } from "utils/fetchDescription";
import logo from "./logo.png";

export function mapResponse({
	data: {
		records: [record],
	},
}: ResponseData): Offer {
	const offer = {
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
		seniority: { id: record.seniority.id, name: record.seniority.name },
	};

	return offer;
}

export function useDescription(id: number) {
	const [offer, setOffer] = useState<Offer>();
	useEffect(() => {
		const doFetch = async () => {
			try {
				const response = await fetchDescription(id);
				const json = await response.json();
				setOffer(mapResponse(json));
				console.log("description");
			} catch {
			} finally {
			}
		};
		doFetch();
	}, [id]);
	return { offer };
}

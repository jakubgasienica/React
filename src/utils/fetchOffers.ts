export const fetchOffers = (filter: string, sort: string) => {
	return fetch(
		`http://localhost:4000/offers?limit=10&search=${filter}&sort_direction=${sort}`
	);
};

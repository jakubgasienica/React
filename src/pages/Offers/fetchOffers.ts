export const fetchOffers = () => {
	return fetch("http://localhost:4000/offers?limit=10");
};

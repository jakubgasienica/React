export const fetchOffers = (filter: string) => {
	return fetch(`http://localhost:4000/offers?limit=10&search=${filter}`); // filter przeszukje po frazie
};

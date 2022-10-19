export const fetchDescription = (id: number) => {
	return fetch(`http://localhost:4000/offers/${id}`);
};

export const fetchSort = (sort: string) => {
	return fetch(`http://localhost:4000/offers?limit=10&sort_direction=${sort}`);
};

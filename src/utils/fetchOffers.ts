export const fetchOffers = (filter: string) => {
	// URLSearchParams

	/*
	if (filters.salaryFrom) {
		urlParams.set('salary_from', filters.salaryFrom)
	}

	...

	?${urlSearchParams.toString()}
	*/
	return fetch(`http://localhost:4000/offers?limit=10&search=${filter}`);
};

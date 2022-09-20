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

export type { Offer };

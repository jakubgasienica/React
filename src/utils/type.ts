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

type ContractTypeSalary = {
	salaryFrom: number;
	salaryTo: number;
};

type ContractType = {
	contractTypeId: number;
} & ContractTypeSalary;

type FormDataSingle = {
	title: string;
	thumb: null | File;
	city: string;
	duration: number;
	company: string;
	description: string;
};

type FormDataMultiple = {
	benefits: number[];
	categories: number[];
	contractTypes: ContractType[];
	seniorities: number[];
};

type FormData = FormDataSingle & FormDataMultiple;

export type {
	Offer,
	FormData,
	FormDataMultiple,
	FormDataSingle,
	ContractType,
	ContractTypeSalary,
};

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
	seniority: {
		id: number;
		name: string;
	};
};

type ContractTypeSalary = {
	salaryFrom: number;
	salaryTo: number;
};

type ContractType = {
	id: number;
	name: string;
};

type FormDataSingle = {
	title: string;
	thumb: null | File;
	city: string;
	duration: string;
	company: string;
	description: string;
};

type FormDataMultiple = {
	benefits: number[];
	categories: number[];
	contractTypes: {
		salaryFrom: ContractTypeSalary["salaryFrom"];
		salaryTo: ContractTypeSalary["salaryTo"];
		id: ContractType["id"];
	}[];
	seniorities: number[];
};

type FormData = FormDataSingle & FormDataMultiple;

type KeyOfMultiple = keyof Pick<
	FormDataMultiple,
	"benefits" | "categories" | "seniorities"
>;

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

export type {
	KeyOfMultiple,
	Offer,
	FormData,
	FormDataMultiple,
	FormDataSingle,
	ContractType,
	ContractTypeSalary,
	ResponseData,
};

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
	id: number;
	name: string;
};

//ContracttypePayloa

// todo refactor -> przniesć typy ktore sie powtarzaja do type
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

export type {
	KeyOfMultiple,
	Offer,
	FormData,
	FormDataMultiple,
	FormDataSingle,
	ContractType,
	ContractTypeSalary,
};

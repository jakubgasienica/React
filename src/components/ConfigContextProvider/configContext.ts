import { createContext } from "react";

type Category = {
	id: number;
	name: string;
};

type Benefit = {
	id: number;
	name: string;
};

type ContractType = {
	id: number;
	name: string;
};

type Seniority = {
	id: number;
	name: string;
};
type Config = {
	categories: Category[];
	benefits: Benefit[];
	contractTypes: ContractType[];
	seniorities: Seniority[];
};

const initialConfig = {
	categories: [],
	benefits: [],
	contractTypes: [],
	seniorities: [],
};

const ConfigContext = createContext<Config>(initialConfig);

export { ConfigContext, initialConfig };
export type { Category, Config };

import React from "react";
import { useState, useEffect, ReactNode } from "react";
import {
	Category,
	ConfigContext,
	Config,
	initialConfig,
} from "./configContext";

type ResponseData = {
	benefits: {
		id: number;
		name: string;
	}[];
	categories: {
		id: number;
		name: string;
	}[];
	contract_types: {
		id: number;
		name: string;
	}[];
	seniorities: {
		id: number;
		name: string;
	}[];
};

function mapResponse(data: ResponseData): Config {
	return {
		benefits: data.benefits,
		categories: data.categories,
		contractTypes: data.contract_types,
		seniorities: data.seniorities,
	};
}

type Props = {
	children: ReactNode;
};

const UsersContext = React.createContext({
	config: [],
});

function ConfigContextProvider({ children }: Props) {
	const [config, setConfig] = useState<Config>(initialConfig);

	useEffect(() => {
		fetch("http://localhost:4000/config")
			.then(response => response.json())
			.then(data => setConfig(mapResponse(data.data)));
	}, []);

	return (
		<ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
	);
}

export { ConfigContextProvider, UsersContext };

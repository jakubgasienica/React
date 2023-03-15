import { createContext } from "react";

const initialFilter = {
	filter: "",
	setFilter: (str: string) => {},
};

const FilterContext = createContext<typeof initialFilter>(initialFilter);

export { FilterContext };

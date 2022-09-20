import { createContext } from "react";
import { Offer } from "utils/type";

const initialFilter = {
	filter: "",
	setFilter: (str: string) => {},
};

const FilterContext = createContext<typeof initialFilter>(initialFilter);

export { FilterContext };

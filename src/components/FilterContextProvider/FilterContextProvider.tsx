import { ReactNode, useState } from "react";
import { FilterContext } from "./filterContext";

type Props = {
	children: ReactNode;
};

export function FilterProvider({ children }: Props) {
	const [filter, setFilter] = useState("");

	const handleFilterChange = (str: string) => {
		setFilter(str);
	};

	return (
		<FilterContext.Provider value={{ filter, setFilter: handleFilterChange }}>
			{children}
		</FilterContext.Provider>
	);
}

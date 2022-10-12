import { ReactNode, useState } from "react";
import { SortContext, OrderBy } from "./SortContext";

type Props = {
	children: ReactNode;
};

export function SortProvider({ children }: Props) {
	const [sort, setSort] = useState("asc");

	const handleSortChange = (orderBy: OrderBy) => {
		setSort(orderBy);
	};

	return (
		<SortContext.Provider
			value={{
				sort,
				setSort: handleSortChange,
			}}>
			{children}
		</SortContext.Provider>
	);
}

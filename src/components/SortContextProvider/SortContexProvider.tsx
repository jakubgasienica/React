import { ReactNode, useState } from "react";
import { SortContext, Direction } from "./SortContext";

type Props = {
	children: ReactNode;
};

export function SortProvider({ children }: Props) {
	const [sort, setSort] = useState("asc");

	const handleSortChange = (direction: Direction) => {
		setSort(direction);
	};

	return (
		<SortContext.Provider
			value={{
				sort,
				setSortingMethod: handleSortChange,
			}}>
			{children}
		</SortContext.Provider>
	);
}

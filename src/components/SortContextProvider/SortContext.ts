import { createContext } from "react";

type OrderBy = "asc" | "desc";

const initialSort = {
	sort: "asc",
	setSort: (orderBy: OrderBy) => {},
};

const SortContext = createContext<typeof initialSort>(initialSort);

export { SortContext };
export type { OrderBy };

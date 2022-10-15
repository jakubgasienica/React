import { createContext } from "react";

type Direction = "asc" | "desc";

const initialSort = {
	sort: "asc",
	setSortingMethod: (direction: Direction) => {},
};

const SortContext = createContext<typeof initialSort>(initialSort);

export { SortContext };
export type { Direction };

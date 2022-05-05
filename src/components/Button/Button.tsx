import { MouseEvent } from "react";

type Props = {
	children: string;
	onClick: (event: MouseEvent<HTMLButtonElement>) => void;
};

function Button({ children, onClick }: Props) {
	return <button onClick={onClick}>{children}</button>;
}

export { Button };

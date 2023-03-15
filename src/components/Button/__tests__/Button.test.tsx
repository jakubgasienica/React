import { Button } from "../Button";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Button.tsx", () => {
	test("if has button proper text", () => {
		render(
			<Button onClick={jest.fn()} type='form'>
				ADD
			</Button>
		);

		const button = screen.getByText(/ADD/);

		expect(button).toBeTruthy();
	});

	test("if has button proper function", () => {
		const onClick = jest.fn();

		render(
			<Button onClick={onClick} type='form'>
				add
			</Button>
		);

		const button = screen.getByRole("button");

		userEvent.click(button);

		expect(onClick).toHaveBeenCalled();
	});
});

import { Button } from "../Button";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Button.tsx", () => {
	// beforeEach(() => {
	// 	console.log("przed kazdym testem");
	// });

	// afterEach(() => {
	// 	console.log("po kazdym tescie");
	// });

	// beforeAll(() => {
	// 	console.log("przed wszystkimi raz");
	// });

	// afterAll(() => {
	// 	console.log("po wszystkich");
	// });

	test("if has button proper text", () => {
		render(<Button onClick={jest.fn()}>ADD</Button>);

		const button = screen.getByText(/ADD/);

		expect(button).toBeTruthy();
	});

	test("if has button proper function", () => {
		const onClick = jest.fn();

		render(<Button onClick={onClick}>add</Button>);

		const button = screen.getByRole("button");

		userEvent.click(button);

		expect(onClick).toHaveBeenCalled();
	});
});

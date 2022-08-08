import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Input } from "../Input";

describe("Input.tsx", () => {
	test("if text is email", () => {
		render(<Input placeholder='email' onChange={jest.fn()}></Input>);

		const input = screen.getByPlaceholderText(/email/);

		expect(input).toBeTruthy();
	});

	test("if has input proper function", () => {
		const onClick = jest.fn();

		render(<Input placeholder='email' onChange={onClick}></Input>);

		const input = screen.getByRole("textbox");

		userEvent.type(input, "email");

		expect(onClick).toHaveBeenCalled();
	});

	test("if has Error text too long string", () => {
		render(
			<Input
				placeholder='email'
				onChange={jest.fn()}
				value='emailemial'></Input>
		);

		const error = screen.getByText("Za długa nazwa");

		expect(error).toBeTruthy();
	});

	test("if has Error text too shortstring", () => {
		render(<Input placeholder='email' onChange={jest.fn()} value='e'></Input>);

		const error = screen.getByText("Za krótka nazwa");

		expect(error).toBeTruthy();
	});
});

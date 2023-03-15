import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Input } from "../Input";

describe("Input.tsx", () => {
	test("if text is email", () => {
		render(<Input placeholder='email' onChange={jest.fn()} />);

		const input = screen.getByPlaceholderText(/email/);

		expect(input).toBeTruthy();
	});
});

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Form } from "../Form";

describe("Form.tsx", () => {
	test("Is error when title is too short", () => {
		render(<Form />);

		const input = screen.getByPlaceholderText(/add title/i);
		const submit = screen.getByText(/next step/i);

		userEvent.type(input, "t");
		userEvent.click(submit);

		const error = screen.getByText("Title is too short");

		expect(error).toBeTruthy();
	});
});

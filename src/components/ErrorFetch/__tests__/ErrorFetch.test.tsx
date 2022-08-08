import { render, screen } from "@testing-library/react";
import { ErrorFetch, Error } from "../ErrorFetch";

describe("ErrorFetch.tsx", () => {
	test("if text is here when delete", () => {
		render(<ErrorFetch type={Error.Delete}></ErrorFetch>);

		const errorFetch = screen.getByText(/This offer can't be deleted/);

		expect(errorFetch).toBeTruthy();
	});

	test("if text is here when is fecthing offers", () => {
		render(<ErrorFetch type={Error.FetchOffers}></ErrorFetch>);

		const errorFetch = screen.getByText(/Offers can't be render/);

		expect(errorFetch).toBeTruthy();
	});
});

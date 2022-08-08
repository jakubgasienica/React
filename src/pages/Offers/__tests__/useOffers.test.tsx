import { renderHook, waitFor } from "@testing-library/react";
import { Error } from "components/ErrorFetch/ErrorFetch";

import { useOffers, mapResponse } from "../useOffers";
import mockData from "./mocks.json";

const mockFetchOffers = jest.fn();

jest.mock("../fetchOffers", () => ({
	fetchOffers: () => mockFetchOffers(),
}));

describe("useOffers.tsx", () => {
	beforeEach(() => {
		mockFetchOffers.mockImplementation(() => {
			return new Promise(resolve =>
				resolve({
					json: () => {
						return new Promise(resolveJson => resolveJson(mockData));
					},
				})
			);
		});
	});

	test("if sets error", async () => {
		mockFetchOffers.mockImplementation(() => {
			return new Promise((_, reject) => reject());
		});

		const { result } = await renderHook(() => useOffers());

		await waitFor(async () => {
			expect(result.current.error).toBe(Error.FetchOffers);
		});
	});

	test("if loading is true", async () => {
		const { result } = await renderHook(() => useOffers());

		await waitFor(async () => {
			expect(result.current.offers).toMatchObject(mapResponse(mockData));
		});
	});
});

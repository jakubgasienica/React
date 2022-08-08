import { renderHook, render, act } from "@testing-library/react";
import exp from "constants";
import { ChangeEvent } from "react";
import { useForm } from "../useForm";

describe("useFrom.tsx", () => {
	test("if element is toogled to checkbox multi checked", () => {
		const { result } = renderHook(() => useForm());

		act(() => {
			result.current.handleMultipleChange("benefits", {
				target: { value: "2" },
			} as ChangeEvent<HTMLInputElement>);
		});

		expect(result.current.formData.benefits).toMatchObject([2]);

		act(() => {
			result.current.handleMultipleChange("benefits", {
				target: { value: "2" },
			} as ChangeEvent<HTMLInputElement>);
		});

		expect(result.current.formData.benefits).toMatchObject([]);
	});

	test("if title is added to handleChamge", () => {
		const { result } = renderHook(() => useForm());
		act(() => {
			result.current.handleChange("title", {
				target: { value: "text" },
			} as ChangeEvent<HTMLInputElement>);
		});

		expect(result.current.formData.title).toBe("text");
	});
});

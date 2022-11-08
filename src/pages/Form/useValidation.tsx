import { useState } from "react";
import { FormDataSingle } from "utils/type";
import { isTooLong, isTooShort } from "./Validation";

type ValidationErrors = Partial<Record<keyof FormDataSingle, string>>;

const titleMaxLength = 30;

function useValidation(formData: FormDataSingle) {
	const [validationErrors, setValidationErrors] = useState<ValidationErrors>();

	function validateTitle() {
		let error = "";

		if (isTooLong(formData.title, titleMaxLength)) {
			error = "Title is too long";
		}

		if (isTooShort(formData.title, 2)) {
			error = "Title is too short";
		}

		setValidationErrors(state => ({
			...state,
			title: error,
		}));
	}

	function validateCity(title: string) {
		let error = "";
		if (isTooLong(title, 30)) {
			error = "Title is too long";
		}

		if (isTooShort(title, 2)) {
			error = "Title is too short";
		}
		setValidationErrors(state => ({
			...state,
			city: error,
		}));
	}

	function validateCompany(title: string) {
		let error = "";
		if (isTooLong(title, 30)) {
			error = "Title is too long";
		}

		if (isTooShort(title, 2)) {
			error = "Title is too short";
		}
		setValidationErrors(state => ({
			...state,
			company: error,
		}));
	}

	function validateDuration(title: string) {
		let error = "";
		if (isTooLong(title, 2)) {
			error = "Title is too long";
		}

		if (isTooShort(title, 1)) {
			error = "Title is too short";
		}
		setValidationErrors(state => ({
			...state,
			duration: error,
		}));
	}

	function validateDescription(title: string) {
		let error = "";
		if (isTooLong(title, 10000)) {
			error = "Title is too long";
		}

		if (isTooShort(title, 1)) {
			error = "Title is too short";
		}

		setValidationErrors(state => ({
			...state,
			description: error,
		}));
	}

	function validateAll() {
		validateTitle();
		validateCity("");
		validateCompany("");
		validateDuration("");
		validateDescription("");
	}
	return {
		validateTitle,
		validateCity,
		validateCompany,
		validateDuration,
		validateDescription,
		validationErrors,
	};
}

export { useValidation };

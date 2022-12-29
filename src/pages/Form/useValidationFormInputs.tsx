import { useState } from "react";
import { FormDataSingle } from "utils/type";
import { isTooLong, isTooShort } from "./Validation";

type ValidationErrors = Partial<Record<keyof FormDataSingle, string>>;

function useValidationFormInputs(formData: FormDataSingle) {
	const [validationErrors, setValidationErrors] = useState<ValidationErrors>();

	function validateTitle() {
		let error = "";

		if (isTooLong(formData.title, 30)) {
			error = "Title is too long";
		}

		if (isTooShort(formData.title, 2)) {
			error = "Title is too short";
		}

		setValidationErrors(state => ({
			...state,
			title: error,
		}));
		return !error;
	}

	function validateCity() {
		let error = "";
		if (isTooLong(formData.city, 30)) {
			error = "Title is too long";
		}

		if (isTooShort(formData.city, 2)) {
			error = "Title is too short";
		}
		setValidationErrors(state => ({
			...state,
			city: error,
		}));
		return !error;
	}

	function validateCompany() {
		let error = "";
		if (isTooLong(formData.company, 30)) {
			error = "Title is too long";
		}

		if (isTooShort(formData.company, 2)) {
			error = "Title is too short";
		}
		setValidationErrors(state => ({
			...state,
			company: error,
		}));
		return !error;
	}

	function validateDuration() {
		let error = "";
		const maxDuration = 99;

		if (formData.duration > maxDuration) {
			error = "Title is too long";
		}

		if (formData.duration <= 0) {
			error = "Title is too short";
		}
		setValidationErrors(state => ({
			...state,
			duration: error,
		}));
		return !error;
	}

	function validateDescription() {
		let error = "";
		if (isTooLong(formData.description, 10000)) {
			error = "Title is too long";
		}

		if (isTooShort(formData.description, 1)) {
			error = "Title is too short";
		}

		setValidationErrors(state => ({
			...state,
			description: error,
		}));

		return !error;
	}

	function validateAll() {
		return [
			validateTitle(),
			validateCity(),
			validateCompany(),
			validateDuration(),
			validateDescription(),
		].every(value => value);
	}

	return {
		validateTitle,
		validateCity,
		validateCompany,
		validateDuration,
		validateDescription,
		validationErrors,
		validateAll,
	};
}

export { useValidationFormInputs };

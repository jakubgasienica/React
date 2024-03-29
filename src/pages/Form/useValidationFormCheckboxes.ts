import { useState } from "react";
import type {
	FormDataMultiple,
	ContractType,
	ContractTypeSalary,
} from "utils/type";

type ContractTypesError = {
	id: ContractType["id"];
	field: keyof ContractTypeSalary | "both";
	error: string;
};

type ValidationErrors = {
	contractTypes: ContractTypesError[];
	categories: string;
	benefits: string;
	seniorities: string;
	minimumOneCategory: string;
};

function useValidationFormCheckboxes(
	formData: FormDataMultiple,
	onHandleSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void
) {
	const [validationErrorsFormCheckboxes, setValidationErrorsFormCheckboxes] =
		useState<ValidationErrors>({
			contractTypes: [],
			categories: "",
			benefits: "",
			seniorities: "",
			minimumOneCategory: "",
		});

	function validateSalaryField(
		id: ContractType["id"],
		field: keyof ContractTypeSalary
	) {
		const value = formData.contractTypes.find(
			contractType => contractType.id === id
		)?.[field];

		setValidationErrorsFormCheckboxes(state => ({
			...state,
			contractTypes: state.contractTypes.filter(
				contractTypeError =>
					!(contractTypeError.id === id && contractTypeError.field === field)
			),
		}));

		if (!value) {
			const error = "Enter the salary of the offer";
			setValidationErrorsFormCheckboxes(state => ({
				...state,
				contractTypes: [...state.contractTypes, { id, field, error }],
			}));
			return false;
		}

		validateSalaryIfIsGrater(id);

		return true;
	}

	function validateSalaryIfIsGrater(id: ContractType["id"]) {
		const salaryTo =
			formData.contractTypes.find(contractType => contractType.id === id)
				?.salaryTo ?? 0;
		const salaryFrom =
			formData.contractTypes.find(contractType => contractType.id === id)
				?.salaryFrom ?? 0;

		const field = "both";
		setValidationErrorsFormCheckboxes(state => ({
			...state,
			contractTypes: state.contractTypes.filter(
				contractTypeError =>
					!(contractTypeError.id === id && contractTypeError.field === field)
			),
		}));

		if (salaryFrom > salaryTo) {
			const error = "'Salary to'must be lower than 'salary from'";

			setValidationErrorsFormCheckboxes(state => ({
				...state,
				contractTypes: [
					...state.contractTypes,
					{ id, error, field },
					{ id, error, field: field },
				],
			}));
			return false;
		}
		return true;
	}

	function validateMultiplesChoice(
		formDataMultipleKey: keyof FormDataMultiple
	) {
		setValidationErrorsFormCheckboxes(state => ({
			...state,
			[formDataMultipleKey]: "",
		}));
		if (!formData[formDataMultipleKey].length) {
			const error = "You must have check one option";
			setValidationErrorsFormCheckboxes(state => ({
				...state,
				[formDataMultipleKey]: error,
			}));
			return false;
		}

		return true;
	}

	function clearContractTypeError(id: number) {
		setValidationErrorsFormCheckboxes(state => ({
			...state,
			contractTypes: state.contractTypes.filter(
				contractType => contractType.id !== id
			),
		}));
	}

	function validateSalary() {
		setValidationErrorsFormCheckboxes(state => ({
			...state,
			minimumOneCategory: "",
		}));

		if (formData.contractTypes.length === 0) {
			const error = "You must complete at minimum one category";
			setValidationErrorsFormCheckboxes(state => ({
				...state,
				minimumOneCategory: error,
			}));
			return false;
		}

		const valid = formData.contractTypes
			.map(contractType => {
				const validSalaryFrom = validateSalaryField(
					contractType.id,
					"salaryFrom"
				);
				const validSalaryTo = validateSalaryField(contractType.id, "salaryTo");

				return validSalaryFrom && validSalaryTo;
			})
			.every(valid => valid);

		return valid;
	}

	function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
		e.preventDefault();

		if (
			[
				validateMultiplesChoice("benefits"),
				validateMultiplesChoice("categories"),
				validateMultiplesChoice("seniorities"),
				validateSalary(),
			].every(value => value)
		) {
			onHandleSubmit(e);
		}
	}
	return {
		validationErrorsFormCheckboxes,
		validateSalaryField,
		validateMultiplesChoice,
		handleSubmit,
		validateSalaryIfIsGrater,
		clearContractTypeError,
	};
}

export { useValidationFormCheckboxes };

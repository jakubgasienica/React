import { useState } from "react";
import type { FormDataMultiple, ContractType } from "utils/type";
import { isTooLong, isTooShort } from "./Validation";

// type ValidationErrors = Partial<Record<keyof FormDataMultiple, string>>;

type ContractTypeErrors = {
	from: string;
	to: string;
};

type ValidationErrors = {
	contractTypes: { id: ContractType["id"]; field: DDD; error: string }[];
};

function useValidationFormCheckboxes(formData: FormDataMultiple) {
	const [validationErrorsFormCheckboxes, setValidationErrorsFormCheckboxes] =
		useState<ValidationErrors>();

	function validateSalary(
		id: ContractType["id"],
		field: keyof ContractTypeErrors
	) {
		let error = "";

		// formData.contractTypes
		//  [
		//   { contractTypeId: 1, salaryFrom: 0, salaryTo: 6666 },
		//   { contractTypeId: 2, salaryFrom: 0, salaryTo: 6666 }
		// ]

		if (formData.contractTypes)
			setValidationErrorsFormCheckboxes(state => ({
				...state,
				contractTypes: {
					...state?.contractTypes,
					[type]: {
						...state?.contractTypes[type],
						[field]: error,
					},
				},
			}));
	}
	return {
		validationErrorsFormCheckboxes,
		validateSalary,
	};
}

export { useValidationFormCheckboxes };

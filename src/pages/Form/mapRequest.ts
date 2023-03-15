import type { FormData } from "utils/type";

// function map() {
// 	return new Promise((resolve, reject) => { // pending, resolved, rejected,
// 		setTimeout(() => {
// 			resolve("fooo") // ustawia stan na resolved
// 		}, 1000)
// 	})
// }

// fetch()

// const data = await map() // Promise<resolved>

function mapRequest(formData: FormData) {
	const newDate = new Date(formData.duration);
	const today = new Date();
	newDate.setHours(today.getHours());
	const day = Math.round(newDate.getTime() - today.getTime()) / 1000;

	const file = formData.thumb;

	const requestObject = {
		title: formData.title,
		benefit_ids: formData.benefits,
		category_ids: formData.categories,
		seniority_id: formData.seniorities,
		duration: day,
		description: formData.description,
		company_name: formData.company,
		company_city: formData.city,
		contracts: formData.contractTypes.map(con => ({
			salary_from: con.salaryFrom,
			salary_to: con.salaryTo,
			contract_type_id: con.id,
		})),
	};

	return new Promise(resolve => {
		if (file) {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => {
				const base64String = reader.result;
				resolve({ ...requestObject, thumb: base64String });
			};
		} else {
			resolve(requestObject);
		}
	});
}

export { mapRequest };

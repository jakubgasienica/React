import { act } from "react-dom/test-utils";
import { mapRequest } from "../mapRequest";
import type { FormData } from "utils/type";

type RequestData = {
	title: string;
	duration: number;
	description: string;
	thumb: string;
	company_name: string;
	company_city: string;
	seniority_id: string;
	category_ids: string[];
	benefit_ids: string[];
	contracts: {
		salary_from: string;
		salary_to: string;
		contract_type_id: string;
	}[];
};

const file = new File([], "file.txt");

const formData: FormData = {
	title: "aaa",
	city: "aa",
	duration: "2",
	company: "aa",
	description: "s",
	thumb: file,
	benefits: [1],
	categories: [2],
	contractTypes: [
		{
			salaryFrom: 1,
			salaryTo: 2,
			id: 1,
		},
	],
	seniorities: [2],
};

const requestData: RequestData = {
	title: "aaa",
	company_city: "aa",
	duration: 1,
	company_name: "aa",
	seniority_id: "1",
	category_ids: ["1"],
	benefit_ids: ["1"],
	contracts: [
		{
			salary_from: "1",
			salary_to: "1",
			contract_type_id: "1",
		},
	],
	description: "s",
	thumb: "dd",
};

const requestDataPromise = new Promise(res => res({ requestData }));

describe("mapRequest.ts", () => {
	test("if map is proper", () => {
		const body = mapRequest(formData);
		expect(body).toMatchObject(requestDataPromise);
	});
});

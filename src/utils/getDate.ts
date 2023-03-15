import { months } from "utils/variables";

function getDatePublished(date: Date) {
	let month = months[date.getMonth()];
	return `${date.getDate()} ${month}`;
}

function getDateActive(date: Date, duration: number) {
	const newDate = new Date();
	newDate.setDate(date.getDate() + duration);

	let month = months[newDate.getMonth()];

	return `${newDate.getDate()} ${month}`;
}

export { getDateActive, getDatePublished };

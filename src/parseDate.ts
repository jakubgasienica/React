export const parseDate = (date: Date) => {
	const year = date.getFullYear();

	let month = `${date.getMonth() + 1}`;
	month = month.length === 1 ? (month = `0${month}`) : month;

	let day = date.getDate().toString();
	day = day.length === 1 ? (day = `0${day}`) : day;

	return `${year}-${month}-${day}`;
};

// calc(a, b, dzialanie) ->
// parseDate(new Date())  -> YYYY-mm-dd np. parseDate(new Date(10-7-2022)) -> 2022-07-10
type C = "+" | "-" | "*" | "/";

export const calc = (a: number, b: number, c: C) => {
	if (c === "+") {
		return a + b;
	} else if (c === "-") {
		return a - b;
	} else if (c === "*") {
		return a * b;
	} else if (c === "/") {
		return a / b;
	}
};

export const quadraticFunc = (a: number, b: number, c: number) => {
	if (a === 0) {
		console.log("This not quadratic function");
	} else {
		const delta = b * b - 4 * a * c;
		const p = Math.sqrt(delta);
		if (delta < 0) {
			console.log("Itsn't zeroplaces");
			return "";
		} else if (delta === 0) {
			const x = -b / (2 * a);
			console.log(`X=${x}`);
			return x;
		} else {
			const xOne = (-b - p) / (a * 2);
			const xTwo = (-b + p) / (a * 2);
			console.log(`X1=${xOne}, X2=${xTwo}`);
			return `${xOne} ${xTwo}`;
		}
	}
};

import { parseDate, calc, quadraticFunc } from "./parseDate";

test("if function returns zeros of quadraticFunc", () => {
	const zeroPlaces = quadraticFunc(2, 0, -2);

	expect(zeroPlaces).toBe("-1 1");
});

test("calculator", () => {
	const sum = calc(1, 1, "+");
	const sub = calc(1, 1, "-");
	const divide = calc(1, 1, "/");
	const multiply = calc(1, 1, "*");

	expect(sum).toEqual(2);
	expect(sub).toEqual(0);
	expect(divide).toEqual(1);
	expect(multiply).toEqual(1);
});

test("if function returns string", () => {
	const date = parseDate(new Date());
	console.log(parseDate(new Date()));

	expect(date).toBe("2022-07-19");
	// expect(result).toBe("aaa"); // 2022-10-10
});

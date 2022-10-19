function isTooLong(text: string, valueLength: number, maxLength: number) {
	if (valueLength > maxLength) {
		return text;
	}
}
function isTooShort(text: string, valueLength: number, minLength: number) {
	if (valueLength > minLength) {
		return text;
	}
}

export { isTooLong, isTooShort };

function isTooLong(value: string, maxLength: number) {
	if (value.length > maxLength) {
		return true;
	}
	return false;
}
function isTooShort(value: string, minLength: number) {
	if (value.length < minLength) {
		return true;
	}
	return false;
}

export { isTooLong, isTooShort };

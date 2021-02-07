// main
const isEmptyOrSpaces = (str: string) =>
	str === null || str.match(/^ *$/) !== null

// exports
export { isEmptyOrSpaces }

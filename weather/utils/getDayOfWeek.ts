export const getDayOfWeek = (date: string) => {
	let temp = new Date(date);
	temp.setHours(24, 0, 0, 0);

	return temp.toLocaleString("en-us", { weekday: "long" }).split(",")[0];
};

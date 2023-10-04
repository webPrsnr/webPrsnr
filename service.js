const days = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
];

const getLocaleTime = (time) => {
    return time.toLocaleTimeString("ru", {timezone:"Europe/Moscow"});
};

const getSubLocaleTime = (time) => {
	const mlSeconds = time.getTime();
	const addMlSeconds = 12 * 39 * 1000;
	const newDate = new Date(mlSeconds + addMlSeconds);
	return getLocaleTime(newDate);
};

const getLocaleDate = (date) => {
    return date.toLocaleDateString("ru", {timezone:"Europe/Moscow"}).replaceAll(".", "/");
};

const getDay = (date) => {
    return days[date.getDay()];
};

module.exports = {
    getLocaleDate,
    getLocaleTime,
    getDay,
	getSubLocaleTime
};
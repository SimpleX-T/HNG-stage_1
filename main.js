const dateDisplayEl = document.getElementById("dateDisplay"),
	timeDisplayEl = document.getElementById("timeDisplay");

const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

function displayDateAndTime() {
	setInterval(() => {
		const date = new Date();
		const curHour = date.getUTCHours(),
			curMin = date.getUTCMinutes(),
			curSec = date.getUTCSeconds(),
			curDay = date.getUTCDay(),
			curMonth = date.getUTCMonth(),
			curYear = date.getUTCFullYear();

		const curTime = `${curHour < 10 ? "0" : ""}${curHour} : ${
			curMin < 10 ? "0" : ""
		}${curMin} : ${curSec < 10 ? "0" : ""}${curSec}`;

		const curDate = `${curDay} ${months[curMonth - 1]}, ${curYear}`;

		timeDisplayEl.textContent = curTime;
		dateDisplayEl.textContent = curDate;
	}, 1000);
}

displayDateAndTime();

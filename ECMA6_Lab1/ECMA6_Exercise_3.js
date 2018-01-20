//ECMA6 - Exercise 3

function isWeekend() {
	const todayDate = new Date();
  	const day = todayDate.getDay(); // 0-6 0 is Sunday

  	let days = ['weekend', 'weekday', 'weekday', 'weekday', 'weekday', 'weekday', 'weekend']
    return days[day];
}

console.log(isWeekend());
//ECMA6 - Exercise 4

	'use strict';

	const item = {
	  "name": "Biscuits",
	  "type": "regular",
	  "category": "food",
	  "price": 2.0
	}

	const applyCoupon = category => discount => unit => {
		unit.price =  unit.price - (unit.price*discount);
		return unit;
	}

	console.log(applyCoupon("food")(0.1)(item).price);
const events = require('events');

class Clock extends events {
	constructor() {
		super();
		this.tickEv();
	}
	tickEv() {
		const scope = this;
		
		setInterval(() => scope.emit('tick'), 1000);
	}
}

module.exports = Clock;
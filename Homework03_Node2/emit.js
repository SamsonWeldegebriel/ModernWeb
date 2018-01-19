const Clock = require('./clock');
const tickEvent = new Clock();

tickEvent.on('tick', () => console.log("woohoo"));
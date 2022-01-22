class Vehicle {
	travelTime() {
		return this.timeTaken
	}
}


class Bus extends Vehicle {
	constructor() {
		super()
		this.timeTaken = 10
	}
}

class Tax extends Vehicle {
	constructor() {
		super()
		this.timeTaken = 4
	}
}

class Commute {
	travel(...transports) {
		return transports.map(transport => `${transport.constructor.name}: ${transport.travelTime()}`)
	}
}

const commute = new Commute()
console.log(commute.travel(
	new Bus(),
	new Tax(),
))
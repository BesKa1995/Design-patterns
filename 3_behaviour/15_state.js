class Light {
	constructor(light) {
		this.light = light
	}

}

class RedLight extends Light {
	constructor() {super('red')}

	sing() {
		return 'STOP'
	}
}

class YellowLight extends Light {
	constructor() {super('yellow')}

	sing() {
		return 'READY'
	}
}

class GreenLight extends Light {
	constructor() {super('green')}

	sing() {
		return 'GO!'
	}
}

class TrafficLight {
	constructor() {
		this.states = [
			new RedLight(),
			new YellowLight(),
			new GreenLight(),
		]
		this.current = this.states[0]
	}

	change() {
		let index = this.states.findIndex(light => light === this.current)
		if (index + 1 < this.states.length) {
			this.current = this.states[index + 1]
		} else {
			this.current = this.states[0]
		}
	}

	sign() {
		return this.current.sing()
	}
}


const traffic = new TrafficLight()

console.log(traffic.sign())
traffic.change()
console.log(traffic.sign())
traffic.change()
console.log(traffic.sign())
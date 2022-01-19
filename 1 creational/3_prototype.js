const car = {
	wheels: 4,
	init() {
		console.log(`Wheels: ${this.wheels}, Owner: ${this.owner}`)
	}

}

const carWithOwner = Object.create(car, {
	owner: {
		value: 'Beso'
	}
})

console.log(carWithOwner)

console.l
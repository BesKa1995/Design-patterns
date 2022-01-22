class Employee {
	constructor(name, salary) {
		this.name = name
		this.salary = salary
	}

	responsibilities() {}

	getPaid() {
		return `${this.name} has ${this.salary} salary in a month`
	}

	work() {
		return `${this.name} is doing ${this.responsibilities()}`
	}
}


class Developer extends Employee {
	constructor(name, salary) {
		super(name, salary)
	}

	responsibilities() {
		return `Software`
	}
}


const dev1 = new Developer('Beso', 1000)

console.log(dev1.work())
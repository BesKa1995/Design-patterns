class MySum {

	constructor(initialValue = 10) {
		this.sum = initialValue
	}

	add(value) {
		this.sum += value
		return this
	}
}


const sum1 = new MySum()

console.log(sum1.add(1).add(2).add(3).sum)



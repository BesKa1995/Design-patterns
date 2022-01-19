class Test {
	static instance
	constructor(data) {
		if (Test.instance) {
			return Test.instance
		}
		Test.instance = this
		this.data = data
	}

	getData() {
		return this.data
	}
}


const t = new Test('123')
const c = new Test('asdasd')


console.log(t.getData())
console.log(c.getData())



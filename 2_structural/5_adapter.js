class OldCalculator {
	operations(t1, t2, operation) {
		switch (operation) {
			//@formatter:off
			case 'add' : return t1 + t2
			case 'sub' : return t1 - t2
			//@formatter:on
		}
	}
}

class NewCalculator {
	add(t1, t2) {
		return t1 + t2
	}

	sub(t1, t2) {
		return t1 - t2
	}
}

class CalcAdapter {
	constructor() {
		this.calc = new NewCalculator()
	}

	operations(t1, t2, operation) {
		switch (operation) {
			//@formatter:off
			case 'add' : return this.calc.add(t1, t2)
			case 'sub': return this.calc.sub(t1,t2)
			//@formatter:on
		}
	}
}

const calcAdapter = new CalcAdapter()

console.log(calcAdapter.operations(10, 11, 'add'))
console.log(calcAdapter.operations(10, 11, 'sub'))



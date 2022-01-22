class MyIterator {
	constructor(data = []) {
		this.index = 0
		this.data = data

	}

	[Symbol.iterator]() {
		return {
			next: () => {
				if (this.index < this.data.length) {
					return {
						value: this.data[this.index++],
						done: false
					}
				} else {
					this.index = 0
					return {
						value: undefined,
						done: true
					}
				}
			}
		}
	}
}

const iterator = new MyIterator(['this', 'is', 'iterator'])
for (const iteratorElement of iterator) {
	console.log(iteratorElement)
}

class Subject {

	constructor() {
		this.observers = []
	}

	subscribe(observer) {
		this.observers.push(observer)
	}

	fire(action) {
		this.observers.forEach(observer => observer.update(action))
	}
}

class Observer {
	constructor(state) {
		this.state = state
		this.initialState = state
	}

	update(action) {
		switch (action.type) {
			case 'ADD':
				this.state += action.payload
				break
			case 'INCREMENT':
				++this.state
				break
			case 'DECREMENT':
				--this.state
				break
			default:
				this.state = this.initialState

		}
	}
}

const stream = new Subject()
const obs1 = new Observer(1)
const obs2 = new Observer(2)


stream.subscribe(obs1)
stream.subscribe(obs2)

stream.fire({ type: 'ADD', payload: 10 })
stream.fire({ type: 'INCREMENT' })

console.log(obs1.state)
console.log(obs2.state)
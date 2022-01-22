class User {
	constructor(name) {
		this.name = name
		this.room = null
	}

	send(message, to) {
		this.room.send(message, this, to)
	}

	receive(message, from) {
		console.log(`${from.name} => ${this.name}: ${message}`)
	}

}


class ChatRoom {
	constructor() {this.users = {}}

	register(...users) {
		users.forEach(user => {
			this.users[user.name] = user
			user.room = this
		})

	}

	send(message, from, to) {
		if (to) {
			to.receive(message, from)
		} else {
			Object.keys(this.users).forEach(key => {
				if (this.users[key] !== from) {
					this.users[key].receive(message, from)
				}
			})
		}
	}
}

const jim = new User('Jim')
const will = new User('Will')
const sam = new User('Sam')


const room = new ChatRoom()


room.register(jim)
room.register(will)
room.register(sam)


sam.send('Hello', jim)
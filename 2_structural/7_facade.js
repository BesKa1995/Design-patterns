class Complaints {
	constructor() {
		this.complaints = []
	}

	reply(complaints) {}

	add(complaints) {
		this.complaints.push(complaints)
		return this.reply(complaints)
	}
}

class ComplaintsService extends Complaints {
	reply({ id, customer, details }) {
		return `Service: ${id}: ${customer}: (${details})`
	}
}


class ComplaintsProduct extends Complaints {
	reply({ id, customer, details }) {
		return `Product: ${id}: ${customer}: (${details})`
	}
}


class ComplaintsRegistry {
	static list = {
		service: ComplaintsService,
		product: ComplaintsProduct
	}

	register(customer, type, details) {
		const id = Date.now()
		const complaint = new ComplaintsRegistry.list[type]
		return complaint.add({ id, customer, details })
	}
}


const registry = new ComplaintsRegistry()

console.log(registry.register('Joe', 'service', 'Not   available'))
console.log(registry.register('Walter', 'product', 'Not working'))


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

class ServiceComplaints extends Complaints {
	reply({ id, customer, details }) {
		return `
			ServiceType: ${this.constructor.name}
			ID:${id}
			NAME:${customer}
			DETAILS:(${details}
`
	}
}


class ProductComplaints extends Complaints {
	reply({ id, customer, details }) {
		return `
			ServiceType: ${this.constructor.name}
			ID:${id}
			NAME:${customer}
			DETAILS:(${details}
`
	}
}


class ComplaintsRegistry {

	static list = {
		service: ServiceComplaints,
		product: ProductComplaints
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


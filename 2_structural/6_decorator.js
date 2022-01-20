class Server {
	constructor(ip, port) {
		this.ip = ip
		this.prot = port
	}

	get url() {
		return `https://${this.ip}:${this.prot}`
	}
}

function aws(server) {
	server.isAws = true
	server.awsInfo = () => server.url

	return server
}


const s1 = aws(new Server('122.16.188.20', 8080))

console.log(s1.awsInfo())
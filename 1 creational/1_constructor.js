function Server(name, ip) {
	this.name = name
	this.ip = ip
}

Server.prototype.getUrl = function () {
	return `https://${this.ip}:80`
}

const s = new Server('Server', '195.100.5.90')

console.log(s.getUrl())
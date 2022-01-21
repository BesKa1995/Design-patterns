//fetch optimization

function networkFetch(url) {
	return `${url} - response from server`
}

const cache = []

const proxiedFetch = new Proxy(networkFetch, {
	apply(target, thisArg, args) {
		const url = args[0]
		if (cache.includes(url)) {
			return `${url} - response from cache`
		} else {
			cache.push(url)
			return target(args[0])
		}
	}
})

console.log(proxiedFetch('google.com'))
console.log(proxiedFetch('google.com'))
console.log(proxiedFetch('facebook.com'))


const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((request, response) => {
	const q = url.parse(request.url, true);
	const filename = './frontend' + q.pathname;

	fs.readFile(filename, (error, data) => {
		if (error) {
			response.writeHead(404, { 'Content-Type': 'text/html' });
			return response.end('404 Not Found');
		}
		response.writeHead(200, { 'Content-Type': 'text/html' });
		response.write(data);
		return response.end();
	});
});

server.listen(3000, () => {
	console.log('you are connected on port 3000');
});

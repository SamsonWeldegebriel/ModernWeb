const 	fs = require('fs');
const http = require('http');
const image = "./worldmap.jpg";

const port = 4000;

let server = http.createServer((req, res) => {

	let rStream = fs.createReadStream(image);
	rStream.pipe(res);
});

server.listen(port, () =>console.log('Image	 Reading is listning to port ' + port));
const 	zlib = require("zlib");
const fs = require('fs');
const gzip = zlib.createGzip();
const gunzip = zlib.createGunzip();

let path = "worldmap.jpg";
let out = "./worldmap.jpg.gz";
let input = fs.createReadStream(path);
let outGzip = fs.createWriteStream(out);

input.pipe(gzip).pipe(outGzip);

setTimeout(function() {
	let readStream = fs.createReadStream(out);
	let writestream = fs.createWriteStream(out.replace(".gz", ""));
	readStream.pipe(gunzip).pipe(writestream);
}, 1000);

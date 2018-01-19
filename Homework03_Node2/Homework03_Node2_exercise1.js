const dns = require("dns");

let domainName = "www.mum.edu";

dns.resolve4(domainName, (err, ipAddress) => {
  	if (err) throw err;
 	console.log(`IP address for ${domainName}: ${ipAddress}`);
});
//Node Lab1 – Written Exercise

'use strict';

const tree = { 
	name : "home", 
	files : ["notes.txt","todo.txt"], 
	subFolders: [	
		{ name : "payroll", 
		  files : ["paper.pdf","funds.csv"], 
		  subFolders: [] 
		}, 
		{ name: "misc", 
		  files : ["summer1.jpg","summer2.jpg", "summer3.jpg"], 
		  subFolders: [
			{ name : "logs", 
			  files : ["logs1","logs2","logs3","logs4"], 
			  subFolders: [] 
		  }] 
	}] 
};

const find = file => tree => {
	console.log("The tree is: " , tree);
	let result = false;
	for(let i in tree.files) {
		if(tree.files[i] == file) {
			result = true;
		}
	}

	if(!result) {
		for(let j in tree.subFolders) {
			let response = find(file)(tree.subFolders[j]);
			if(response) {
				res = true;
				break;
			}
		}
	}

	return res;	
}

console.log(find("paper.pdf")(tree));
console.log(find("logs4")(tree));

/*

Write a node code for finding a file from a tree object: implement a simple algorithm for find() that tells us whether a file is found in a tree of directories or not.

Use recursion, currying, higher order function and lambda expressions( arrow functions ). Test your code in Node.JS CLI. 

const tree = { 
	name : "home", 
	files : ["notes.txt","todo.txt"], 
	subFolders: [	
		{ name : "payroll", 
		  files : ["paper.pdf","funds.csv"], 
		  subFolders: [] 
		}, 
		{ name: "misc", 
		  files : ["summer1.jpg","summer2.jpg", "summer3.jpg"], 
		  subFolders: [
			{ name : "logs", 
			  files : ["logs1","logs2","logs3","logs4"], 
			  subFolders: [] 
		  }] 
	}] 
}; 
find("paper.pdf")(tree); // true 
find("randomfile")(tree); // false
*/
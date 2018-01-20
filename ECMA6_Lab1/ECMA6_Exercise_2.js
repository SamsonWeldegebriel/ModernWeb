//ECMA6 - Exercise 2

String.prototype.filterWords = function(sentence) {
  let replaced = this.toString();
  for(let word in sentence) {
  	replaced = replaced.replace(sentence[word], "***");
  }
  return replaced;
}

console.log("This house is nice!".filterWords(['house', 'nice']));
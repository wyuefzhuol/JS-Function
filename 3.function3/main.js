function alphabetSort(message){
	// wirte your code here
	return Array.from(message).sort().join("");
}
console.log(alphabetSort('hello')); // should return 'ehllo'

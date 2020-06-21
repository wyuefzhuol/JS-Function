function countWords(message){
	// wirte your code here
	var strs = [];
	strs = message.split(" ");
	return strs.length;
}
console.log(countWords('Good morning, I love JavaScript.')); // should return 5
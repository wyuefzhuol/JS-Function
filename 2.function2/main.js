function palindrome(message){
	// wirte your code here
	var len = message.length;
	var str1 = "";
	for(var i=len-1; i>=0;i--){
		str1+=message[i];
	}
	return str1 == message;
}
console.log(palindrome('hello')); // should return false
console.log(palindrome('abcba')); // should return true
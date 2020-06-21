function reverseString(message){
	// wirte your code here
	var stack = [];//生成一个栈
	for(var len = message.length,i=len;i>=0;i-- ){
		stack.push(message[i]);
	}
	return stack.join('');
}
console.log(reverseString('hello')); // should return 'olleh'
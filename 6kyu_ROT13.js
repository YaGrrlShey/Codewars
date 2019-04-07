/*Create a function that takes a string and returns the string ciphered with Rot13. 
If there are numbers or special characters included in the string, they should be returned 
as they are. Only letters from the latin/english alphabet should be shifted, like in the 
original Rot13 "implementation"..
 */

 function rot13(m){
 	//invoke replace to return string in Roth13
 	// use regex expression to capture all characters
 	// charCodeAt to UTF-16 code
 	//String.fromCharCode to covert UTF-16 code to string
   return m.replace((/[a-z]/gi), e => String.fromCharCode(e.charCodeAt()+(e.toLowerCase()< 'n' ? 13 : -13)));
}
/*Write a function that will return the count of distinct case-insensitive alphabetic 
characters and numeric digits that occur more than once in the input string. The input 
string can be assumed to contain only alphabets (both uppercase and lowercase) and
 numeric digits.
 */

 function duplicateCount(text){
 // set text to lower case for cade insensitve resultsl	
  //filter out letters found in text more than once
  //invoke set funtion on filtered results to remove duplicates
  //
  return new Set([...text.toLowerCase()].filter((e, i, arr)=> arr.includes(e, i+1))).size;
}
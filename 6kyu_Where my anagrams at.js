/*Write a function that will find all the anagrams of a word from a list. 
You will be given two inputs a word and an array with words. You should 
return an array of all the anagrams or an empty array if there are none. 
*/
function anagrams(word, words) {
//sort word & current element of array for comparison
//return elements that are an anangram of given word
 return words.filter(elm => ''+[...elm].sort() === ''+[...word].sort());
}
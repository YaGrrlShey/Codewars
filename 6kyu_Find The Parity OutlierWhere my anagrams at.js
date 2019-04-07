/*You are given an array (which will have a length of at least 3,
 but could be very large) containing integers. The array is either 
 entirely comprised of odd integers or entirely comprised of even 
 integers except for a single integer N. Write a method that takes the 
 array as an argument and returns this "outlier" N. 
*/
unction findOutlier(int){
//filter even & odd integers into separate arrays
//check which array has a length of 1
//return 1st elment of that array
var even = int.filter(n => n % 2 === 0);
var odd = int.filter(n => n % 2 !== 0);

return even.length === 1 ? even[0] : odd[0];
}

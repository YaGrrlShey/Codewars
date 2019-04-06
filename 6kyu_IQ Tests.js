/*a program that among the given numbers finds one that is different in evenness, 
and return a position of this number.
 */

 function iqTest(numbers){
  // convert string to array
  // setup varibles to hold even & odd ouputs for elements in array
  numbers = numbers.split(' ');
  var even = 0;
  var odd = 0;
  var evenIndex = 0;
  var oddIndex = 0;
  //loop thru array incrementing variables
  for(var i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 === 0){
     even++
     evenIndex = i + 1;
    }else{
    odd++
    oddIndex = i + 1;
    }
  }
   //varible equal to one holds outlier .. return associated index
    return even === 1 ? evenIndex : oddIndex;
}
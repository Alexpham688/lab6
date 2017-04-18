// var farhenheit =70;
//
// var celcius = (farhenheit - 32)  / 1.8;
//
// console.log(celcius + farhenheit);
//
// var y = 21.1
//
// var x = ( y * 1.8) + 32;
//
// console.log(farhenheit);
// console.log( 'celcius temp' * 1.8 + 32);



//
// function convertTemp(temperature,degree){
//
//  if (degree === "C") {
// temperature  = ((temperature - 32) / 1.8);
// console.log(temperature, "F");
// }
// if(degree === "F"){
//   temperature = ((temperature * 1.8) + 32);
//   console.log(temperature, "C");
// }
// }
// convertTemp(212,"C");
// convertTemp(32, "C");
// convertTemp(65, "C");
// convertTemp(0, "F");
//
// var numbers=[1,1,2,3,5,8];
// var total = 0;
// numbers.forEach(i){
//   total+=i;
// };
// console.log(total);

var number = 6;
do
{guess=parseInt(prompt ("guess my number 1-10"));}
while (guess != number);{
  alert("Not a match!!");
}if(guess === number){
  alert("Good work");
}
/// not sure why it doesn't print out 'not a match when wrong number'

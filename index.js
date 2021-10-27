//1
// Give Parameter 
// create an if statement, if int is greater than or equal to 5 AND less than or equal to 10.
// if condition is true than return true otherwise return false.
function betweenFiveAndTen(int){
  if (int >= 5 && int <= 10){
      return true;
  }
  else {
      return false;
  }
}
console.log(betweenFiveAndTen(7));

//2
// Give Parameter
// add a conditional statement using ternary chain if the condition evaluates to true return true otherwise return false.
function betweenTenAndThirty(int){
  return int >= 10 && int <= 30 ? true
  : false;
}
console.log(betweenTenAndThirty(22));

//3
// Give Parameter
// add a conditional statement using ternary chain if the condition evaluates to true return true otherwise return false.
function betweenThirtyAndFifty(int){
  return int >= 30 && int <= 50 ? true
  : false;
}
console.log(betweenThirtyAndFifty(30));

//4
// Give Parameter
// add a conditional statement using ternary chain if the condition evaluates to true return true otherwise return false.
function betweenThirtyFiftySeventy(int){
  return int >= 0 && int <= 30 || int >= 50 && int <= 70 ? true
  : false;
}
console.log(betweenThirtyFiftySeventy(55));

//5
// Give Parameter
// add a conditional statement using ternary chain if the condition evaluates to true return true otherwise return false.
function betweenTwentyFiftySixty(int){
  return int >= 0 && int <= 20 || int >= 50 && int <= 60 ? true
  : false;
}
console.log(betweenTwentyFiftySixty(12));

//6
// Give Parameter
// add a conditional statement using ternary chain if the condition evaluates to true return true otherwise return false.
function betweenTenTwentyThirty(int){
  return int >= 0 && int <= 10 || int >= 20 && int <= 30 ? true
  : false;
}
console.log(betweenTenTwentyThirty(9));
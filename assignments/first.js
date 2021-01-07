//create a function which calls other two function and a value

let result1=function square(a){
    return a*a;
}
let result2=function double(a){
    return 2*a;
}
function composed(value){
     square=result1;
     double1=result2
  
    return square(double1(value));
}
console.log(composed(5))
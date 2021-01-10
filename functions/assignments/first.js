//create a function which calls other two function and a value
'use strict'
let result1=function square(a){
    return a*a;
}
let result2=function double(a){
    return 2*a;
}
function composed(square,double,value){
     
  
    return square(double(value));
}
console.log(composed(result1,result2, 5))
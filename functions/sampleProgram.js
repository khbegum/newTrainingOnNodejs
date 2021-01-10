function getAverageOfNumbers(a,b){
    var average=(a+b)/2; //local variable
    console.log(average);
    return average
}
var result=getAverageOfNumbers(4,6); //global variable
getAverageOfNumbers();//parameters are not given for a function when it is required it gives result as NAN
getAverageOfNumbers(12,13,14);//when parameters are given more than required then it consider required parameters only 
console.log("The average is " +result)
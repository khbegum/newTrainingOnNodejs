function map([a,b,c,d,e],square){

    return square([a,b,c,d,e])
}
function square([a,b,c,d,e]){
    let arr=[a,b,c,d,e];
    let arr1=[arr.slice(0,1)*arr.slice(0,1)];
    let arr2=[arr.slice(1,2)*arr.slice(1,2)];
    let arr3=[arr.slice(2,3)*arr.slice(2,3)];
    let arr4=[arr.slice(3,4)*arr.slice(3,4)];
    let arr5=[arr.slice(4,5)*arr.slice(4,5)];
    let finalarray=arr1.concat(arr2.concat(arr3.concat(arr4.concat(arr5))));
    // for(let i=0;i<arr1.length;i++){
        
    //     arr2=arr2.concat(arr1[i]*arr1[i])
        
    // }
  //console.log(arr1.slice(0,1).concat(arr1.slice(1,2)));
  console.log(finalarray);
}

map([1,2,3,4,5],square);
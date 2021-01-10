'use strict'
var person=function(fname,lname,age) {
   this.fname=fname;
   this.lname=lname;

   this.age=age;
}
var amitab=new person("amitab","bacchan",69);
var abishek=new person("abishek",39);

Object.freeze(abishek);
//abishek.fname="ljlkhj"
abishek=Object.create(amitab)
console.log(abishek.age)
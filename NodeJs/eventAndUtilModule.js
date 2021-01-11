var events=require('events');
var util=require('util');
var person=function(name){
    this.name=name
}
util.inherits(person,events.EventEmitter);
var james=new person('james');
var shaun=new person('shaun');
var ryu=new person('ryu');
var people=[james,shaun,ryu];
people.forEach((person)=>{
person.on('speak',(msg)=>{
    console.log(person.name +" said "+ msg)
})
})
james.emit('speak','hey dudes')
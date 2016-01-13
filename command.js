var _ = require('lodash');

var Obj = function(a){
  this.a = a;
}

Obj.prototype.printA = function(){
  console.log(this.a);
}

var obj = new Obj('hello world');
_.bindAll(obj);
var func = obj.printA;
func();


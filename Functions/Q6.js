// "Print output

var x = 21;
a();//a is not defined.
b();//b is not defined.
console.log(a);
a = function() {
    
   x = 20;
  console.log(x);
};
b = function() {
    
    x = 40;
   console.log(x);
};																								
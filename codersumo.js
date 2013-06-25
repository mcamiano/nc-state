// You can code in Javascript
// Note: you have to use 'print' instead of 'console.log'
(function mogrify(arg) { 
  print((arg%3?'':'Fizz')+''+(arg%5?'':'Buzz')+( (arg%3&&arg%5) ? arg : ''));
  return arg<100 && mogrify(++arg);
})(1);

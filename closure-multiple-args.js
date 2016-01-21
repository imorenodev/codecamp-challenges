function add() {
  if (arguments.length == 2) {
    var arg1 = checkIsNaN(arguments[0]);
    var arg2 = checkIsNaN(arguments[1]);
    
    if (arg1 === undefined || arg2 === undefined) {
      console.log("undefined");
      return undefined;
    } else {
      console.log(arg1 + arg2);
      return arg1 + arg2;
    }
  } else {
    var arg1 = arguments[0];
    
    if (checkIsNaN(arg1)) {
      return function(arg2) {
        if (arg1 === undefined || checkIsNaN(arg2) === undefined) {
          console.log("undefined");
          return undefined;
        } else {
          console.log(arg1 + arg2);
          return arg1 + arg2;
        }
      }
    }
  }
  
  function checkIsNaN(num) {
    if (typeof num != "number") {
      return undefined;
    } else 
      return num;
  }
}

add(2,3); //5
add(2)(3); //5
add("http://bit.ly/IqT6zt"); //undefined
add(2, [3]); //undefined
add(2, "3"); //undefined
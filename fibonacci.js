//sum all odd fib numbers up to and including argument N
function sumFibs(num) {
  var currentN = 1;
  var previousN = 0;
  var swapN = 0;
  var total = 1;
  
  for (var i = 1; (currentN + previousN) <= num; i++) {
    if (isOdd(currentN + previousN)) {
      total += currentN + previousN;
    }
    swapN = currentN;
    currentN += previousN;
    previousN = swapN;
  }
  
  function isOdd(number) {
    if (number % 2 !== 0) {
      return true;
    }
    return false;
  }
  return total;
}

sumFibs(4);

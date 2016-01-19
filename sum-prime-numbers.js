function sumPrimes(num) {
  var total = 0;
  
  if (num >= 2) {
    total += 2;
    for (var i = 3; i <= num; i += 2) { //3..5..7..9..11
      if (isPrime(i)) {
        total += i;
      }
    }
  }
  
  function isPrime(number) {
    var sqrtN = Math.sqrt(number);
    if (number % 2 === 0) {
      return false;
    }
    
    for (var j = 3; j <= sqrtN; j += 2) {
      if (number % j === 0) {
        return false;
      }
    }
    return true;
  }
  return total;
}

sumPrimes(10); //17
sumPrimes(977); //17156
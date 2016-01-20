function rot13(encodedStr) {
  var codeArr = encodedStr.split("");  // String to Array
  var decodedArr = []; // Your Result goes here
  // Only change code below this line
  for (var i = 0; i < codeArr.length; i++) {
    var nextLetter = encodedStr.charCodeAt(i);//save current letter in variable

    if (nextLetter >= 65 && nextLetter <= 90) { //is uppercase letter character
      if (nextLetter + 13 > 90) {
        decodedArr[i] = (String.fromCharCode(nextLetter - 13));
      } else {
        decodedArr[i] = (String.fromCharCode(nextLetter + 13));
      }
    } else {
      decodedArr[i] = codeArr[i];
    }
  }
  
  return decodedArr.join(""); // Array to String
}

//"FREE CODE CAMP"
rot13("SERR PBQR PNZC");
//"FREE PIZZA!"
rot13("SERR CVMMN!");
//"FREE LOVE?"
rot13("SERR YBIR?");
//"THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.");
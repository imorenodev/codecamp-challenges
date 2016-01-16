function translate(str) {
  if (isVowel(str.charAt(0)) >= 0) { //check is word starts with vowel
    return str.concat("way");
  }
  
  return pigLatinize(str); //return recursive function
  
  function pigLatinize(word) {
    if (isVowel(word.charAt(0)) >= 0) { //first letter is a vowel
      return word.concat("ay");
    }
    var firstLetter = word.slice(0, 1); //save current first letter
    word = word.slice(1).concat(firstLetter); //move first letter to end of word
    return pigLatinize(word); //recurse
  }
  
  function isVowel(letter) {
    var vowels = ["a", "e", "i", "o", "u"];
    return vowels.indexOf(letter.toLowerCase()); //if consonant return -1
  }
}

translate("algorithm");
translate("gray");
translate("aardvark");
translate("schlop");
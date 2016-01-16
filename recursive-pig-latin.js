function translate(str) {
  if (isVowel(str.charAt(0)) >= 0) {
    return str.concat("way");
  }
  
  return pigLatinize(str);
  
  function pigLatinize(word) {
    if (isVowel(word.charAt(0)) >= 0) {
      return word.concat("ay");
    }
    var firstLetter = word.slice(0, 1);
    word = word.slice(1).concat(firstLetter);
    return pigLatinize(word);
  }
  
  function isVowel(letter) {
    var vowels = ["a", "e", "i", "o", "u"];
    return vowels.indexOf(letter.toLowerCase());
  }
}

translate("algorithm");
translate("gray");
translate("aardvark");
translate("schlop");
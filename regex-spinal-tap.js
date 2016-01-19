function spinalCase(str) {
  var re = /([a-z](?=[A-Z]))|([^A-Za-z])/g;
  var newStr = str.replace(re, "$1-", "-$2");
  console.log(newStr.toLowerCase());
}

spinalCase('This Is Spinal Tap');
spinalCase('thisIsSpinalTap');
spinalCase('The_Andy_Griffith_show');
spinalCase('This-Is-Spinal-Tap');
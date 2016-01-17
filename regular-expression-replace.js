function convert(str) {
  var re = /(&)|(\')|(\")|(<)|(>)/g;
  var newStr = str.replace(re, function(match, p1, p2, p3, p4, p5) {
    if (p1) { return "&amp;" } //if & replace with &amp;
    if (p2) { return "&apos;"} //if ' replace with &apos;
    if (p3) { return "&quot;"} //if " replace with &quot;
    if (p4) { return "&lt;" } //if < replace with &lt;
    if (p5) { return "&gt;" } //iff > replace with &gt;
  });
  console.log(newStr);
}

convert("Dolce & Gabbana");
convert("Hamburgers < Pizza < Tacos");
convert("Sixty > twelve");
convert('Stuff in "quotation marks"');
convert("Shindler's List");
convert("<>");
convert("abc");
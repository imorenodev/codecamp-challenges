/* Recursive solution for converting decimal numbers */
/* into roman numerals up to ten thousand */

function convert(num) {
  var romanNumerals = [
   { value: 1000, numerals: "M" },
   { value: 900, numerals: "CM" },
   { value: 500, numerals: "D" },
   { value: 400, numerals: "CD" },
   { value: 100, numerals: "C" },
   { value: 90, numerals: "XC" },
   { value: 50, numerals: "L" },
   { value: 40, numerals: "XL" },
   { value: 10, numerals: "X" },
   { value: 9, numerals: "IX" },
   { value: 5, numerals: "V" },
   { value: 4, numerals: "IV" },
   { value: 1, numerals: "I" }
 ];
 //create copy of romanNumerals set
 var romanSet = romanNumerals.slice(0,13);
 var romanArr = [];
 var remainder = 0;

 function getRoman(num) {
 
   if (num < 1) {
     var joinedArr = romanArr.join('');
     console.log("return: " + joinedArr);
     return joinedArr;
   } else {
     remainder = num / romanSet[0].value;
   }
   
   // add corresponding roman numeral symbol to romanArr array
   // repeating the symbol remainder-number-of-times
   if (remainder >= 1) {
     romanArr.push(romanSet[0].numerals.repeat(remainder));
   }
   num = num % romanSet[0].value; // set num to modulus remainder
   romanSet.shift(); // delete object at index 0 and test next numeral value
   return getRoman(num); // recurse until num = 0
 }
 return getRoman(num);
}

convert(36);

/* Returns array of collection objects that match all */ 
/* of source object's property:value pairs */

//collection is an array of objects
//source is an object
function where(collection, source) {
  var arr = [];
  var sourceKeysLength = Object.keys(source).length;
  
  arr = collection.filter(function(obj) { // for each object in collection
    var isMatch = []; // check if obj has contains all properties in source object
    console.log(obj);
    
    for (var i = 0; i < sourceKeysLength; i++) { // for each property in source object
      var sourceProp = Object.keys(source)[i]; // save property name of current source object
      console.log(sourceProp);
      if (obj.hasOwnProperty(sourceProp) && obj[sourceProp] === source[sourceProp]) {
        isMatch.push('T');
      } else {
        isMatch.push('F');
      }
    }
    console.log(isMatch);
    
    if (isMatch.indexOf('F') < 0) {
      console.log('is a match');
      return true;
    } else {
      console.log('not a match');
      return false;
    }
  });
  
  console.log(arr);
  return arr;
}

where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

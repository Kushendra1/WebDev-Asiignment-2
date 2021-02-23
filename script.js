Array.prototype.myEach = function(callback) {
    for (let i= 0; i < this.length; i++) {
	callback(this[i], i, this);
    }
}

Array.prototype.myMap = function(callback) {

}

Array.prototype.myFilter = function(callback) {

}

Array.prototype.mySome = function(callback) {

}

Array.prototype.myEvery = function(callback) {

}

Array.prototype.myReduce = function(callback, currentValue) {

}

// returns true or false if a specified element is in the array or not
Array.prototype.myIncludes = function(targetElement, fromIndex = 0) {
  // returns false if specified index is larger than length of the array
  if (fromIndex >= this.length){
    return false;
  }
  // iterates through the array finding if the target element exists in the array
  for(let i = fromIndex; i < this.length; i++) {
   if (this[i] === targetElement) {
     return true;
   }
 }
 return false;
}

//returns the first index of a given element inside an array, returns -1 if it's not there
Array.prototype.myIndexOf = function(targetElement, fromIndex = 0) {
  //if given index is negative, offsets the index to stil search front and back
  if(fromIndex < 0){
    fromIndex = this.length + fromIndex;
  }
  // if given index is greater than the length of the array, returns -1
  if(fromIndex >= this.lenth){
    return -1;
  }
  // returns the index value of the target element
  for(let i = fromIndex; i < this.length; i++){
    if(this[i] === targetElement){
      return i;
    }
  }
  return -1;
}

//adds element(s) to the end of the array
Array.prototype.myPush = function() {
  var end = this.length;
  const array = arguments;
  // iterates through the array of items to be added to the already existing array
  for(let i = 0; i < array.length; i++){
    //adds items to the end of the array
    this[end] = array[i];
    //increments the length of the array after each item have been added
    end++;
  }
  //returns the length of the completed array
  return this.length;
}

// returns the index of the last encounter of a target element
Array.prototype.myLastIndexOf = function(targetElement, fromIndex = this.length - 1) {
    // offset from the end of the array if negative
    if (fromIndex < 0) {
	fromIndex = this.length + fromIndex;
    }
    // iterate through the array backwords
    for (let i = fromIndex; i >= 0; i--) {
	// return index of element if found
	if (this[i] === targetElement) {
	    return i;
	}
    }
    // return -1 if not found
    return -1;
}

// returns all of the keys of in a key:value pair in an object
Object.myKeys = function(obj) {
    // return array
    const dictKeys = [];
    // iterate through keys
    for (let key in obj) {
	// if key is actually a key
	if (obj.hasOwnProperty(key)) {
	    // append key to return array
	    dictKeys.push(key);
	}
    }
    // return keys
    return dictKeys;
}

// returns all of the values in a key:value pair in an object
Object.myValues = function(obj) {
    // return array
    const dictValues = [];
    // iterate through keys
    for (let key in obj) {
	// if key is actually a key
	if (obj.hasOwnProperty(key)) {
	    // append value of key to return array
	    dictValues.push(obj[key]);
	}
    }
    // return values
    return dictValues;
}

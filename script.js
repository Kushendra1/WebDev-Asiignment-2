Array.prototype.myEach = function(callback) {
    for (let i= 0; i < this.length; i++) {
	callback(this[i], i, this);
    }
}

Array.prototype.myMap = function(callback) {

}

Array.prototype.myFilter = function(callback) {

}

//take in an array of elements and execute a callback function on each of those elements until it finds a callback that is true.
Array.prototype.mySome = function(callback) {
  //iterate through the array
  for (let i= 0; i < this.length; i++) {
    //if it finds a callback that matches the element then return true
    if (callback(this[i], i, this)) {
      return true;
    }
  }
  return false;
};

//take in an array of elements and execute a callback function on each of those elements until it finds that every callback that is true.
Array.prototype.myEvery = function(callback) {
  //iterate through the array
  for (let i= 0; i < this.length; i++) {
    //if the callback doesn't match the element then return false
    if (!callback(this[i], i, this)) {
      return false;
    }
  }
  return true;
}

Array.prototype.myReduce = function(callback, currentValue) {

}

Array.prototype.myIncludes = function(targetElement, fromIndex = 0) {

}

Array.prototype.myIndexOf = function(targetElement, fromIndex = 0) {

}

Array.prototype.myPush = function(targetElement) {

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

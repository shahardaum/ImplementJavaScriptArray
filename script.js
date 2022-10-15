// Re-implement the following array methods

// - map
// - filter
// - reduce
// - includes
// - every
// - reverse
// - some
// - concat
// - find
// - findIndex
// - sort
// - fill

// We're not going to modify the actual built-in Array class.
// No need, it already has these methods.
// Instead - our functions will take an array as their first input parameter.
// The rest of the function signature should be identical to the original Array method (look for it on MDN

function customForEach(array, callback) {
  const { length } = array;

  for (let index = 0; index < length; index += 1) {
    const value = array[index];
    callback(value, index, array);
  }
}
const scores = [12, 55, 70, 47];

let total = 0;
customForEach(scores, (score) => {
  total += score;
});

console.log(total);

//map
function customMap(array, callback) {
  const { length } = array;
  const results = [];
  for (let i = 0; i < length; i++) {
    results.push(callback(array[i], i, array));
  }
  return results;
}
const scores2 = [12, 55, 70, 47];
const test = customMap(scores2, (item) => item * 2);
console.log(test);

//filter

function customFilter(array, callback) {
  const { length } = array;
  const results = [];
  for (let i = 0; i < length; i++) {
    if (callback(array[i], i, array)) {
      results.push(array[i]);
    } else {
      continue;
    }
  }
  return results;
}
const filterArr = customFilter(scores2, (item) => item > 12);
console.log(filterArr);

//Reduce
function customReduce(array, callback, initialValue) {
  let value = initialValue;
  const { length } = array;
  for (let i = 0; i < length; i++) {
    value = callback(value, array[i]);
  }
  return value;
}
let res = customReduce(scores2, (accu, item) => (accu += item), 0);
console.log(res);

//Includes
function customIncludes(array, searchElement, fromIndex = 0) {
  let element = searchElement;
  let index = fromIndex;
  let flag = false;
  const { length } = array;
  for (let i = index; index < length; index++) {
    if (element === array[index]) {
      flag = true;
      return flag;
    }
  }
  return flag;
}
const array12 = [1, 2, 3];
console.log(customIncludes(array12, 3, 2));

//every
function customEvery(array, callback, currentValue) {
  let value = currentValue;
  let flag = false;
  const { length } = array;

  for (let i = 0; i < length; i++) {
    if (callback(array[i], i, array)) {
      flag = true;
    } else {
      flag = false;
      return flag;
    }
  }
  return flag;
}
const array123 = [1, 30, 39, 29, 10, 13];
console.log(customEvery(array123, (value) => value < 20));

// reverse
function customReverse(arr) {
  const newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  arr = newArr;
  return arr;
}
console.log(customReverse(array123));

// some

function customSome(array, callback) {
  const { length } = array;
  let flag = false;
  for (let i = 0; i < length; i++) {
    if (callback(array[i], i, array)) {
      flag = true;
      return flag;
    } else {
      flag = false;
      return flag;
    }
  }
  return flag;
}
console.log(customSome(array123, (item) => item === 11));

//concat
function customConcat(array1, array2) {
  const newArr = [];
  for (let i = 0; i < array1.length; i++) {
    newArr.push(array1[i]);
  }
  for (let i = 0; i < array2.length; i++) {
    newArr.push(array2[i]);
  }
  return newArr;
}
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
console.log(customConcat(array1, array2));

// find
function customFind(array, callback) {
  const { length } = array;
  for (let i = 0; i < length; i++) {
    if (callback(array[i], i, array)) {
      return array[i];
    }
  }
}
console.log(customFind(array1, (item) => item === "b"));

//findIndex

function customFindIndex(array, callback) {
  const { length } = array;
  for (let i = 0; i < length; i++) {
    if (callback(array[i], i, array)) {
      return i;
    }
  }
}
const newNumArray = [23, 33, 4, 55, 666, 888];
console.log(customFindIndex(newNumArray, (item) => item > 55));

//sort
function mergeSort(arr) {
  if (arr.length === 1) {
    // return once we hit an array with a single item
    return arr;
  }

  const middle = Math.floor(arr.length / 2); // get the middle item of the array rounded down
  const left = arr.slice(0, middle); // items on the left side
  const right = arr.slice(middle); // items on the right side

  return merge(mergeSort(left), mergeSort(right));
}

// compare the arrays item by item and return the concatenated result
function merge(left, right) {
  let result = [];
  let indexLeft = 0;
  let indexRight = 0;

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft]);
      indexLeft++;
    } else {
      result.push(right[indexRight]);
      indexRight++;
    }
  }

  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}

//fill
function Customfill(array, value, startIndex = 0, endIndex = array.length) {
  for (let index = startIndex; index <= endIndex; index += 1) {
    array[index] = value;
  }

  return array;
}
console.log(Customfill(newNumArray, 9, 2, 4));

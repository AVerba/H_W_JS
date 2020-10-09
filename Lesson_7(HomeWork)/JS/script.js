//1.

function addIndexes(arr) {
  for (let i in arr) {
    arr[i] += i;
  }
  return arr;
}
// либо так..
function addIndexes(arr) {
  return arr.map((element, index) => element + index);
}

//2.---------
function addEnding(arr, ending) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] += ending;
  }
  return arr;
}
// или
function addEnding(arr, ending) {
  return arr.map((element) => element + ending);
}

//3.-----
function countVowels(str) {
  let VowelsArr = ["a", "e", "i", "o", "u"];
  return str.split("").filter((item) => VowelsArr.includes(item)).length;
}

//4.-----
function findLargestNums(arr) {
  return arr.map((val) => Math.max(...val));
}
//5.------ Работает но через раз....(ERROR: Process was terminated. It took longer than 12000m)
function sortByLength(arr) {
  let TempVal;
  for (let i = 0; i < arr.length; i++) {
    TempVal = arr[i];
    if (String(arr[i]).length > String(arr[i + 1]).length) {
      arr[i] = arr[i + 1];
      arr[i + 1] = TempVal;
    }
  }
  return arr;
}
/// ----
function sortByLength(arr) {
  return arr.sort(function (i, j) {
    return i.length - j.length;
  });
}

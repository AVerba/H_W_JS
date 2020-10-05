function divisibleByFive(value) {
  if (value % 5 == 0) {
    return true;
  }
  return false;
}

//-----------
function oddOrEven(str) {
  if (String(str).length % 2 === 0) {
    return true;
  }
  return false;
}
//----------------------

function footballPoints(matches) {
  return matches.wins * 3 + matches.draws * 1;
}

let matches = {
  wins: 3,
  draws: 3,
  losses: 3,
};
footballPoints(matches);
//------------------
function animals(farm) {
  return farm.chickens * 2 + farm.cows * 4 + farm.pigs * 4;
}

let farm = {
  chickens: 2,
  cows: 3,
  pigs: 5,
};
animals(farm);
//-----------------------

function areTrue(a, b) {
  return Boolean(a) === true && Boolean(b) === true
    ? "both"
    : Boolean(a) === true
    ? "first"
    : "second";
}
areTrue(false, true);

//---- Задачи с LMS------
// №1 ---
function GetBiggerNumber(a, b) {
  return a == b ? "The same" : a >= b ? "first bigger" : "second bigger";
}
// №2 ---
function factorial(n) {
  return n != 1 ? n * factorial(n - 1) : 1;
}
factorial(5); //120

// №3 ---
function GetStringFromNumber(a, b, c) {
  let arr = [String(a), String(b), String(c)];
  return arr.join("");
}
GetStringFromNumber(1, 2, 3);
// №4 ---
function GetSquare(a, b) {
  return b == undefined ? a * a : a * b;
}
GetSquare(2, 3);
// №5 --- Perfect Number
function CheckIdealNumber(num) {
  let result = 0;
  if (num === 0) {
    return false;
  }
  for (let i = num - 1; i >= 1; i -= 1) {
    if (num % i === 0) {
      result = Number(result) + Number(i);
    }
  }
  if (result === num) {
    return true;
  } else {
    return false;
  }
}

// №6 ---
function GetAllPerfectNumber(a, b) {
  for (let i = a; i >= b; i++) {
    if (CheckIdealNumber(i)) {
      return i;
    }
  }
}
// №7 ---
// №8 ---
function GetTimeInSeconds(hours, minutes, seconds) {
  return hours * 3600 + minutes * 60 + seconds;
}
// №9 ---
function GetTimeInHours(AllSeconds) {
  let hours = Math.floor(AllSeconds / 3600);
  let minutes = Math.floor(AllSeconds / 60) - hours * 60;
  let seconds = AllSeconds % 60;
  let time = [
    hours.toString().padStart(2, "0"),
    minutes.toString().padStart(2, "0"),
    seconds.toString().padStart(2, "0"),
  ].join(":");
  return time;
}
GetTimeInHours(3666);

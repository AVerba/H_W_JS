//№1-------------multiplyByLength ----------
function multiplyByLength(arr) {
  let NewArr = arr.map(function (num) {
    return num * arr.length;
  });
  return NewArr;
}

//№2-------------countdown ------------------
function countdown(start) {
  console.log(start);
  let arr = [];
  let temp;
  for (let i = 0; i <= start; i++) {
    temp = start - i;
    // arr.push(String(start-i));
    arr.push(temp);
  }
  //return Number(arr.join(''));
  return arr;
}
//№3-------------Go------------
function Go(num) {
  let arr = [];
  let temp;
  for (let i = 0; i < num; i++) {
    arr.push("-");
  }
  return arr.join("");
}
//№4-------------addOddToN----------
function addOddToN(n) {
  let count = 0;
  for (let i = 0; i <= n; i++) {
    if (i % 2 != 0) {
      count += i;
    }
  }
  return count;
}

//№5-------------search----------
function search(arr, item) {
  return arr.indexOf(item);
}

// Зачали с LMS

//----------Сумма в диапазоне -------------------------------

function GetValue(TemporaryVariable) {
  char = String(TemporaryVariable).split(",");
  let count;
  let min = Number(char[0]);
  let max = Number(char[1]);
  if (!isNaN(min) || !isNaN(max)) {
    console.log(min, max, typeof min, typeof max);
    for (let i = 0; i <= max; i++) {
      count += min;
      min++;
    }
    console.log(count);
  } else {
    console.log("Entered not a number");
  }
}
//let xd = prompt("Enter");
//GetValue(xd);

//---------- Нахождение общего делителя (Алгоритм Евклида) ----------------
function CommonFactor(FirstNumber, SecondNumber) {
  let first = Number(FirstNumber);
  let second = Number(SecondNumber);
  while (first != 0 || !second != 0) {
    if (first > second) {
      first %= second;
    } else {
      second %= first;
    }
  }
  console.log(first + second);
}

//let firstN = prompt("enter first number");
//let secondN = prompt("enter second number");
//CommonFactor(firstN, secondN);

//--------------Все делители числа -------------------
function AllNumberDevider(number) {
  if (!isNaN(Number(number))) {
    for (let i = 1; i <= number; i++) {
      if (number % i == 0 && number == !number && number == !1) {
        console.log(i);
      }
    }
  } else {
    console.log("Entered not a number");
  }
}

//--------------количество цифр--------------

function GetQuantityOfNumber(number) {
  if (!isNaN(Number(number))) {
    let len = String(number).split("").length;
    console.log(len);
  } else {
    console.log("Entered not a number");
  }
}

//------------Подсчет разных чилел ----------
function CountOfDiferentTypesNumbers(number) {
  if (isNaN(Number(number))) {
    let char = String(number).split(",");
    let countP = 0;
    let countN = 0;
    let countZ = 0;
    for (let i = 0; i < String(number).length - 1; i++) {
      if (Number(char[i]) > 0 || Number(char[i]) < 0) {
        if (char[i] > 0) {
          countP++;
        } else {
          countN++;
        }
      } else {
        countZ++;
      }
    }

    console.log(`User entered ${countP} positive numbers, ${countN} negative numbers and only ${countZ} zero`);
    //console.log(char);
  } else {
    console.log("One of Entered elements are not a number");
  }
}
//let poly = prompt("Please enter your number");
//CountOfDiferentTypesNumbers(poly);
//------ Сдвинуть цифры числа---------
function ShiftNumber(numb, n) {
  let arr = String(numb).split("");
  //arr=numb.split('');
  for (let i = 0; i < n; i++) {
    arr.push(arr[i]);
  }
  return Number(arr.slice(n).join(""));
}

//------------Угадать число-----------------
//value - Чмсло которое загадали
//list - список в котором ищет
// Возвращает позицию числа в списке

function GuessNumber(value, list) {
  let firstNunmer = 0;
  let lastNumber = list.length - 1;
  let pos = -1;
  let found = false;
  let middle;

  while (found === false && firstNunmer <= lastNumber) {
    middle = Math.floor((firstNunmer + lastNumber) / 2);
    if (list[middle] == value) {
      found = true;
      pos = middle;
    } else if (list[middle] > value) {
      lastNumber = middle - 1;
    } else {
      firstNunmer = middle + 1;
    }
  }
  return pos;
}

GuessNumber();

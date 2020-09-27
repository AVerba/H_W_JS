//----------------------------------------------------ПРОВЕРКА НА ОДИНАЦОВЫЕ ЧИСЛА-----------
function CheckNumber(number) {
  if (!isNaN(Number(number))) {
    if (Check(number) == true) {
      console.log("Есть одинаковые цифры");
    } else {
      console.log("Нет одинаковых цифр");
    }
  } else {
    console.log("Entered not a number");
  }
}
//--------------------------
function Check(number) {
  char = String(number).split("");
  let count = 0;
  for (let x = 0; x < String(number).length - 1; x++) {
    for (let y = 0; y < String(number).length - 1; y++) {
      if (char[x] == char[y]) {
        count++;
      }
    }
  }
  if (String(number).length == 2) {
    if (char[0] == char[1]) {
      return true;
    } else {
      return false;
    }
  } else {
    if (count <= 5) {
      return false;
    } else {
      return true;
    }
  }
}
//----------
//-----------------------
//let number = prompt("Enter number");
//console.log(typeof number);
//console.log(Number(number));
//CheckNumber(number);

//-----------------------------------------------ПРОВЕРКА НА ПОЛИНДРОМ --------------
function CheckPalindrome(number) {
  if (Palindrome(number) == true) {
    console.log("Число палиндром");
  } else {
    console.log("Число не палиндром");
  }
}
//---------------------------------
function Palindrome(number) {
  let y = String(number).length;
  let char = [];
  char = String(number).split("");
  let count = 0;
  for (let x = 0; String(number).length; x++) {
    if (char[count] != char[y - 1]) {
      return false;
    } else {
      return true;
    }
  }
}
//-----------------------
//let number = prompt("Enter number");
//CheckPalindrome(number);

// -----------------------------------ОПРЕДЕЛЯЕМ ВОЗРАСТНУЮ КАТЕГОРИЮ-----------------
function YearsCheck(number) {
  if (!isNaN(Number(number))) {
    if (Number(number) > 0 && Number(number) <= 2) {
      console.log("You are baby");
    }
    if (Number(number) >= 12 && Number(number) < 18) {
      console.log("You are teenager");
    }
    if (Number(number) >= 18 && Number(number) < 60) {
      console.log("You are adult");
    }
    if (Number(number) >= 60) {
      console.log("You are old");
    }
  } else {
    console.log("Entered not a number");
  }
}

//let number = prompt("Enter number");
//YearsCheck(number);

// -----------------------------------ОПРЕДЕЛЯЕМ ВОЗРАСТНУЮ КАТЕГОРИЮ-----------------

function SimbolGen(number) {
  if (!isNaN(Number(number))) {
    switch (Number(number)) {
      case 1:
        console.log("!");
        break;
      case 2:
        console.log("@");
        break;
      case 3:
        console.log("#");
        break;
      case 4:
        console.log("$");
        break;
      case 5:
        console.log("%");
        break;
      case 6:
        console.log("^");
        break;
      case 7:
        console.log("&");
        break;
      case 8:
        console.log("*");
        break;
      case 9:
        console.log("(");
        break;
    }
  } else {
    console.log("Entered not a number");
  }
}
//let number = prompt("Enter number");
//SimbolGen(number);
//-----------------Высокосный год-----------

function LeapYear(number) {
  if (!isNaN(Number(number))) {
    const Y = Number(number);
    if (!(Y % 4 || (!(Y % 100) && Y % 400))) {
      console.log("Entered year is a Leap year");
    } else {
      onsole.log("Entered year not a Leap year");
    }
  } else {
    console.log("Entered not a number");
  }
}

//const number = prompt("Enter number");
//LeapYear(number);
//------------------------Скидка по чеку -----------

function discount(number) {
  const bill = number;
  if (!isNaN(Number(number))) {
    if (Number(number) >= 200 && Number(number) <= 300) {
      number *= 0.97;
      console.log(`your bill is ${bill}, Bill with discount is ${number}`);
    }
    if (Number(number) > 300 && Number(number) <= 500) {
      number *= 0.95;
      console.log(`your bill is ${bill}, Bill with discount is ${number}`);
    }
    if (Number(number) > 500) {
      number *= 0.93;
      console.log(`your bill is ${bill}, Bill with discount is ${number}`);
    }
  } else {
    console.log("Entered not a number");
  }
}
//const number = prompt("Enter number");
//discount(number);
//------------------

//------------------------Вывод следующей даты (НЕ ДОДЕЛАЛ)
function NextDate(date) {
  const char = [];
  char = String(date).split(".");
  char[1] -= 1;
  const dt = new Date(char[2], char[1], char[0]);
  let check = char.join;

  if (!isNaN(Number(check))) {
  } else {
    console.log("Entered not a number");
  }
}

//---------- Проверка длинна окружности ----------
function CheckLenght(value) {
  let char = [];
  char = String(value).split(",");
  console.log(char);
  if (!isNaN(Number(char[0])) || !isNaN(Number(char[1]))) {
    if (CheckLen(Number(char[0]), Number(char[1])) == true) {
      console.log("Квадрат будет вписан в окружность");
    } else {
      console.log("Квадрат не будет вписан в окружность");
    }
  } else {
    console.log("Entered not a number");
  }
}
function CheckLen(lenght, perimeter) {
  if (perimeter / 2 >= lenght / 3.14) {
    return true;
  } else {
    return false;
  }
}
//const value = prompt("Enter parameters");
//CheckLenght(value);
//-----------------------Конвертер валют-------

function CurrencyConverter(value) {
  let char = [];
  char = String(value).split(",");
  if (!isNaN(Number(char[0]))) {
    Currency(char);
  } else {
    console.log("Please enter correct value");
  }
}
function Currency(value) {
  let char = [];
  char = value;
  switch (char[1]) {
    case "EUR": {
      console.log(Number(char[0]) * 5.75);
      break;
    }
    case "UAN": {
      console.log(Number(char[0]) * 3.25);
      break;
    }
    case "AZN": {
      console.log(Number(char[0]) * 6.5);
      break;
    }
  }
}
const curr = prompt("Enter value and currency (EUR, UAN. AZN)");
CurrencyConverter(curr);

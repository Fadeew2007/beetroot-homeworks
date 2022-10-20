// * MININUM
// ! 1
// CONSTANTS
const CHILD_MAX_AGE = 11;
const TINAGER_MAX_AGE = 17;
const ADULT_MAX_AGE = 59;

// DYMANIC CONSTANT
const whatAge = +prompt('Скільки тобі років?', 1);

// CHECKS
const notNumber = isNaN(whatAge);
const unrealAge = whatAge < 1;

if (notNumber || unrealAge) {
  throw new Error('Введіть коректний вік');
} else if (whatAge <= CHILD_MAX_AGE) {
  alert('Ти дитина!');
} else if (whatAge <= TINAGER_MAX_AGE) {
  alert('Ти підліток!');
} else if (whatAge <= ADULT_MAX_AGE) {
  alert('Ти дорослий!');
} else {
  alert('Ти пенсіонер!');
}

// ! 2
const anyNumber = +prompt('Веедіть число від 0 до 9');

switch (anyNumber) {
  case 0:
    alert('Спецсимвол під ціим номером ")"');
    break;
  case 1:
    alert('Спецсимвол під ціим номером "!"');
    break;
  case 2:
    alert('Спецсимвол під ціим номером "@"');
    break;
  case 3:
    alert('Спецсимвол під ціим номером "#"');
    break;
  case 4:
    alert('Спецсимвол під ціим номером "$"');
    break;
  case 5:
    alert('Спецсимвол під ціим номером "%"');
    break;
  case 6:
    alert('Спецсимвол під ціим номером "^"');
    break;
  case 7:
    alert('Спецсимвол під ціим номером "&"');
    break;
  case 8:
    alert('Спецсимвол під ціим номером "*"');
    break;
  case 9:
    alert('Спецсимвол під ціим номером "("');
    break;
  default:
    alert('Ви ввели некоректне значення');
    break;
}

// ! 3
const numberRangeFirst = +prompt('Задайте перше число в діапазоні чисел');
const numberRangeLast = +prompt('Задайте друге число в діапазоні чисел');
let finalNumber = 0;

for (let i = numberRangeFirst; i <= numberRangeLast; i++) {
  finalNumber += i;
}

alert(`Загальна сума всіх числе в вашому діапазоні ${finalNumber}`);

// ! 4
const numberFirst = +prompt('Задайте перше число');
const numberSecond = +prompt('Задайте друге число');
let minNumber = Math.min(numberFirst, numberSecond);
let greatestDevider;

for (let i = 1; i <= minNumber; i++) {
  if (numberFirst % i == 0 && numberSecond % i == 0) {
    greatestDevider = i;
  }
}
alert(`Твій спільний дільник до двох чисел ${greatestDevider}`);

// ! 5
let randomUsersNumber = +prompt('Введіть будь яке число');
for (let i = 1; i <= randomUsersNumber; i++) {
  if (randomUsersNumber % i == 0) {
    console.log(i);
  }
}

// * NORMAL
// ! 1
const randomUserNumber = prompt(
  'Введіть будь яке число і дізнаєтесь чи є це число паліндромом'
);
const numberLenght = randomUserNumber.length - 1;
let isPalindrom = true;
for (let i = 0; i <= numberLenght / 2; i++) {
  if (randomUserNumber[i] !== randomUserNumber[numberLenght - i]) {
    isPalindrom = false;
  }
}
if (isPalindrom) {
  console.log(`${randomUserNumber} це паліндром`);
} else {
  console.log(`${randomUserNumber} це не паліндром`);
}

// ! 2
const moneyToSpent = +prompt('Яку кількість грошей ти готовий потратити?');
const yourDiscount = 'Ти маєш знижку';

if (isNaN(moneyToSpent)) {
  //Якщо введуть не тільки число
  alert('Від коли це ми суму грошей рахуємо не тільки цифрами?'); // Буде помилка
} else {
  switch (!!moneyToSpent) {
    case moneyToSpent >= 200 && moneyToSpent < 300: {
      const userDiscount = (moneyToSpent / 100) * 3;
      console.log(`${yourDiscount} 3% `, userDiscount.toFixed(2));
      const toPay = moneyToSpent - userDiscount;
      console.log('Разом зі знижкою до оплати буде: ', toPay.toFixed(2));
      break;
    }
    case moneyToSpent >= 300 && moneyToSpent <= 500: {
      const userDiscount = (moneyToSpent / 100) * 5;
      console.log(`${yourDiscount} 5% `, userDiscount.toFixed(2));
      const toPay = moneyToSpent - userDiscount;
      console.log('Разом зі знижкою до оплати буде: ', toPay.toFixed(2));
      break;
    }
    case moneyToSpent >= 500: {
      const userDiscount = (moneyToSpent / 100) * 7;
      console.log(`${yourDiscount} 7% `, userDiscount.toFixed(2));
      const toPay = moneyToSpent - userDiscount;
      console.log('Разом зі знижкою до оплати буде: ', toPay.toFixed(2));
      break;
    }
    default: {
      alert('В тебе немає знижки, потрібно тратити більше бабла');
    }
  }
}

// ! 3
let positiveNumber = 0;
let negativeNumber = 0;
let evenNumber = 0;
let oddNumber = 0;
let zeroNumber = 0;
let inputRandomNumber;
for (let i = 0; i < 10; i++) {
  inputRandomNumber = +prompt('Введіть ' + (i + 1) + ' число');
  if (inputRandomNumber < 0) {
    negativeNumber++;
  } else if (inputRandomNumber > 0) {
    positiveNumber++;
  } else if (inputRandomNumber === 0) {
    zeroNumber++;
  }
  if (inputRandomNumber % 2 == 0) {
    evenNumber++;
  } else if (inputRandomNumber % 2 != 0) {
    oddNumber++;
  }
}
console.log(
  `Додатніх чисел: ${positiveNumber}, відємних чисел: ${negativeNumber}, нулів: ${zeroNumber}, парних чисел: ${evenNumber}, непарних чисел: ${zeroNumber}`
);

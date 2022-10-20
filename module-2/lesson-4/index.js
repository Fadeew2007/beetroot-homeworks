//! MINIMAL
//* Напиши всі можливі варіанти створення функцій

// Перший виклик
function firstCall() {
  console.log('Перший метод виклику');
}

// Ось так викликається функція
firstCall();

// Другий виклик
let secondCall = function () {};

// Тертій виклик
let thirdCall = (id, name) => id + ', ' + name + '!';
console.log(thirdCall('Айді', "ім'я"));

//* Створи функцію, яка буде виводити кількість переданих їй аргументів.
function countArgs() {
  console.log(arguments.length);
}
countArgs(1, 2, 3, 4, 5, 6, 7);

//* Напиши функцію, яка приймає 2 числа і повертає :
//* -1, якщо перше число менше, ніж друге;
//* 1 - якщо перше число більше, ніж друге;
//* 0 - якщо числа рівні. */
function numberReturn(number1, number2) {
  if (number1 < number2) return -1;
  if (number1 > number2) return 1;
  if (number1 == number2) return 0;
}
console.log(numberReturn(20, 20));
console.log(numberReturn(2, 20));
console.log(numberReturn(20, 2));

//* Напиши функцію, яка обчислює факторіал переданого їй числа.
let askNumber = +prompt('Введіть будь яке число');
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  else return n * factorial(n - 1);
}

console.log(factorial(askNumber));

//* Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.
function numberSplit(a, b, c) {
  return a.toString() + b.toString() + c.toString();
}
console.log(numberSplit(4, 1, 15));

//* Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.
function squqreArea(a, b) {
  if (b == 0 || b == null) {
    return a ** 2;
  } else if (a == 0 || a == null) {
    return b ** 2;
  } else return a * b;
}

console.log(squqreArea(2));
console.log(squqreArea(4, 8));
console.log(squqreArea(23, 12));

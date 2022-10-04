// * MINIMUM

// ! СТВОРИТИ 4 ЗМІННИХ
let name = 'Taras';
const lastname = 'Fadeiev';
let age = '29';
const sex = 'Male';
let year;
const year_today = 2022;
const dog = 15;
const square_perimeter = 4;
let square_side;
let circle_radius;



// ! КОМЕНТУВАННЯ КОДУ ТА НЕПРАВИЛЬНІ ІМЕНА ЗМІННИХ
// let 'name' = 'Тарас'; 
// const 1lastname = 'Фадеєв';
// let var = '29';
/* const !gender = 'Male';
const =gender = 'Feale'; */

// ! СТИЛІ НАПИСАННЯ КОДУ
let camelCase = 'Camel Case';
let PascalCase = 'Pascal Case';
let snake_case = 'Snake Case';
let SCREAMING_SNAKE_CASE = 'Screaming Snake Case';



// * NORMAL
// ! ЗАПИТАТИ ІМ'Я
name = prompt('What is your name?');
alert(`Hello, ${name}!`);

// !ЗАПИТАТИ ДАТУ НАРОДЖЕННЯ І ПОРАХУВАТИ РЕАЛЬНИЙ ВІК І СОБАЧИЙ
year = prompt('What is your birth year?');
age = year_today - year;
alert(`Your age is ${age}`);
alert(`Your dogs age is ${age / dog} years old`);

// !ВИВЕСТИ ПЕРИМЕТР КВАДРАТА
square_side = prompt('Please enter the length of a side of a square.');
alert(`Perimeter of a square is ${square_side * square_perimeter} meters`);


// * MAXIMUM
// ! ПЛОЩА ОКРУЖНОСТІ КОЛА
circle_radius = prompt('Please enter the radius of the circle');
alert(`Area of a circle is ${circle_radius ** 2 * Math.PI} m2`);

// ! ВІДСТАНЬ МІЖ ДВОМА МІСТАМИ + ШВИДКІСТЬ ПОДОЛЯННЯ
const distance = prompt('Please enter a distance beetween cities');
const time = prompt('Please enter a time you want to get from A to B');
alert(`Your speed should be ${distance / time} km/h to get poin B in time`)

// ! КОНВЕРТЕР ВАЛЮТ UAH/PLN
const pln = 8.45;
const money = prompt('How much UAH do you want to convert to PLN');
alert(`You have ${money / pln} zloty (PLN)`);

// ? FINISH
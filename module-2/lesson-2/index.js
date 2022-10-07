// * MINIMAL
// ! 1
const numOne = 0.1;
const numTwo = 0.2;
console.log((numOne + numTwo).toFixed(1))

// ! 2
let num1 = "1";
let num2 = 2;
num1 = +num1
console.log(num1 + num2)

// ! 3
const INPUT_GB = prompt('Вкажіть обсяг пам\'яті вашої флешки в гігабайтах:');
const FILE_SIZE_MB = 820;
const GB_TO_MB = 1024;
alert(`Ви зможете завантажити собі на флешку ${Math.floor(INPUT_GB * GB_TO_MB / FILE_SIZE_MB)} файл(ів) розміром ${FILE_SIZE_MB} мб`);


// * NORMAL
// ! 1
const MONEY_IN_WALLET = prompt('Скільки грошей у вас в гаманці?');
const CHOCOLATE_COST = prompt('Яка вартість шоколадки яку ви хочете придбати?');
alert(`В можете придбати ${Math.floor(MONEY_IN_WALLET / CHOCOLATE_COST)} шоколадок, і вас залишиться ${MONEY_IN_WALLET % CHOCOLATE_COST} гривень решти`)

// ! 2
const THREE_DIGIT_NUMBER = +prompt('Введіть будь ласка тризначне число і я його відображу задом на перед?');
let REVERTED_NUMBER = '';
REVERTED_NUMBER += THREE_DIGIT_NUMBER % 10;
REVERTED_NUMBER += Math.floor(THREE_DIGIT_NUMBER % 100 / 10);
REVERTED_NUMBER += Math.floor(THREE_DIGIT_NUMBER / 100);
alert(`Твоє число задом на перед буде ${REVERTED_NUMBER}`);


// * MAXIMUM
// ! 1
let DEPOSIT = +prompt('Вкажіть суму депозиту яку бажаєте вкласти на 2 місяці і отримати відсотки (5% річних)');
const BANK = DEPOSIT;
const PERCENT = 0.05 / 12 + 1; // місячний відсоток
DEPOSIT *= PERCENT;
DEPOSIT *= PERCENT;
DEPOSIT -= BANK;
alert('Сума нарахованих відсотків = ' + DEPOSIT.toFixed(2) + '$');

// ! 2
console.log(2 && 0 && 3); // Значення false, бо 0 не пройшов перевірку так як 0 це false
console.log(2 || 0 || 3); // Значення true, бо 2 прошйов перевірку і далі вже не читалось
console.log(2 && 0 || 3); // Значення true, бо 3 пройшов перевірку
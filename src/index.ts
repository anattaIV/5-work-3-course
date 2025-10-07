//1 task
function calculateArea(width: number, height: number): number {
  return width * height;
}

calculateArea(5, 10); // 50
// calculateArea("5", 10);

//2 task
function introduce(name: string, title: string = "Господин"): string {
  return `Привет, ${title} ${name}`;
}

introduce("Иван"); //defolt
introduce("Анна", "Доктор"); 

//3 task
const power: (base: number, exponent: number) => number = (base, exponent) => { //(base: number, exponent: number) - типы параметров функции, => number - возвращается - число, = - это присваивание. Мы говорим, что power будет равно следующей функции. (base, exponent) - если сначала мы описали типы параметров и возвращаемых значений, то тут реально создали функцию с параметрами.
  return base ** exponent; // ** возводит в степень
};

power(2, 3); // 8
power(5, 0); // 1
// power(2, "3"); // Ошибка: второй аргумент должен быть number

//5 task
type MathOperation = (x: number, y: number) => number; //создал алиас с определенными типами и возвращаемым значением.

const sum: MathOperation = (x, y) => x + y; // объявил 2 функции работающие по типу алиаса и написал их логическую суть(приницип их будущей работы)
const multiply: MathOperation = (x, y) => x * y;

const checker: MathOperation = (x, y) => { //объявил 3 функцию с 2 параметрами, которая работает по типу алиаса
  if (y === 0) throw new Error("Деление на ноль"); //Если 2 параметр(y) строго ровняется 0, то выбрасывает ошибка "Деление на ноль!"
  return x / y; // Сама по себе функция делит 2 числа друг на друга, но, опять же, если одно из них - 0, то это вызовет ошибку.
};

console.log(sum(3, 4)); // 7
console.log(multiply(3, 4)); // 12
console.log(checker(10, 2)); // 5
// divide(10, 0); // Деление на ноль

//6 task
//Коллбэк я передаю функции для того, чтобы она потом была вызвана в другой функции. Здесь он используется как правило "Как обработать каждый элемент массива"
function processArray(arr: number[], callback: (n: number) => number): number[] { //Создаетс функция processArray, которая, в качестве параметра, получает arr(массив чисел) и для каждого элемента вызывает функцию коллбэк с этим элементом. После создает массив с результатми вызова функции
  return arr.map(callback);//возвращает итоговые значения из вычислений(благодаря .map)
}

const doubled = processArray([1, 2, 3], n => n * 2); //Создается doubled и ей присваивается результат вычеслений функции processArray, в которую подставили все параметры(массив и функцию коллбэк). Умножение на 2
console.log(doubled); // [2, 4, 6]

const squared = processArray([1, 2, 3], n => n ** 2);// Возведение в степень
console.log(squared); // [1, 4, 9]




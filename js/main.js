// Створіть функцію processArray(array, callback), яка приймає масив та функцію-колбек. Викличте processArray з різними масивами та функціями-колбеками, щоб виконати наступні операції:
// Порахувати суму всіх елементів масиву.
// Знайти мінімальний елемент масиву.
// Знайти максимальний елемент масиву.
// Перепишіть колбек-функції на стрілки

const masiv = [1, 2, 3, 4, 5, 6, 7];
const processArray = (array, callback) => {
  return callback(array);
};


const getSum = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

const getMin = (arr) => {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
};

const getMax = (arr) => {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};
console.log("Сума елементів:", processArray(masiv, getSum));
console.log("Мінімум:", processArray(masiv, getMin));
console.log("Максимум:", processArray(masiv, getMax));    



// 2. Створіть функцію operate(a, b, callback), яка приймає два числа та колбек для виконання операції над ними. Використайте її для виконання наступних операцій:
// Додавання.
// Віднімання.
// Множення.
// Ділення.
// Перепишіть колбеки на стрілкові функції

const operate = (a, b, callback) => callback(a, b);

const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

const a = 50;
const b =  100;

console.log(operate(a, b, add));
console.log(operate(a, b, subtract));
console.log(operate(a, b, multiply));
console.log(operate(a, b, divide));
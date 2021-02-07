function calc(num1, num2, operator) {
    return eval(`${num1} ${operator} ${num2}`);
}

let result = calc(10, 20, '+')
let result2 = calc(10, 20, '-')
let result3 = calc(10, 20, '/')
let result4 = calc(10, 20, '*')

console.log('O resultado da soma é: ' + result);
console.log('O resultado da subtração é: ' + result2);
console.log('O resultado da divisão é: ' + result3);
console.log('O resultado da multiplicação é: ' + result4);
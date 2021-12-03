const firstNum = prompt('Enter first number');

const secondNum = prompt('Enter second number');

const operation = prompt('Choose operation')

if (operation !== '+' && operation !== '-' && operation !=='/' && operation !== '*'){ 
alert('You entered non-opetaion symbol')
}

var num1 = Number.parseInt(firstNum);
console.log(typeof(num1));
var num2 = Number.parseInt(secondNum);
console.log(typeof(num2));
var oper = Number.parseInt(operation);

if (operation === '+'){
alert (`${firstNum} + ${secondNum} = ${num1+num2}`)
}else if(operation ==='-'){
alert(`${firstNum} - ${secondNum} = ${num1-num2}`)
}else if(operation ==='*'){
alert(`${firstNum} * ${secondNum} = ${num1*num2}`)
}else if(operation ==='/'){
alert(`${firstNum} / ${secondNum} = ${num1/num2}`)
}


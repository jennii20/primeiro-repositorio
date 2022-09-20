/**
 * operadores de comparação
 */

//verdadeiro (true) ou falso(false)

//comparador de igualdade
const msg = 'Eu sou uma mensagem'
const msg2 = 'Eu sou outra mensagem'

console.log(msg == msg2) //false

const num = 5
const num2 = 5

console.log(num == num2) //true

//idênticos 
let a = 78 //tipo number
let b = '78'//tipo string
console.log(a===b) //false

let c = 5 //number
c = 'Olá mundo' //string


//diferança

console.log(msg != msg2) //true
console.log(a != b) //false
console.log(a !== b) //true

//
a = 56
b = 30

let d = 500
let e = 500


console.log( a > b ) //true
console.log( d >= e) // true
console.log(3 > 6) // false

console.log(3 < 7.5) //true
console.log(7.5 < 7.5) //false
console.log(8 <= 8) //true
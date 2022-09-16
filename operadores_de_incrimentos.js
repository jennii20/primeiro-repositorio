alert('Código funcionando!') //serve para mostrar uma mensagem para o usuario
const nomeUsuario = prompt('Digite seu nome:') // mostrar uma mensagem e recebe um valor
let num = Number(prompt('Olá, ' + nomeUsuario + '. Digite algum número, por favor c:'))
//console.log(typeof num) //typeof retorna o tipo de valor que a variável armazena 


//operadores de incrementos = serve para incrementar o valor de uma variavel 
//const sucessor = num++ // é igual num + 1 


//alert('O sucessor de' + num + ' é ' + sucessor)

console.log(num++) //operador de pós-incrimento
console.log(num) //6
console.log(++num) // operador de pré-incrimento


//operadores de decremento

console.log(num--) //operador de pós-decrimento
console.log(num) 
console.log(--num) //operador de pre-decrimento

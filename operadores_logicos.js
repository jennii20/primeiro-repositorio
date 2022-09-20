/**
 * operadores logicos
 */

//E = todas as condições devem ser verdadeiras


/**
 * V - verdadeiro
 * F - falso
 */

/**v v = v
 * f v = f
 * 
 */
//média precisar ser maior oui igual a 7 e  preciso ter, no minimo 80% de presença

const media = (3.5 + 6 + 10) /3
const presenca = 0.7

console.log(media >= 7 &&  presenca >= 0.8)


//operador ou

/**
 * v v = v
 * f v = v 
 * v f = v
 * f f = f
 */

console.log(4 > 7 || 3 < 2) //false
console.log(5 > 3.5 || 7 > 8) //true

//exemplo de ou

const idade = 30
console.log(idade >= 16 || idade < 60)


//operador não/negação/not

/**
 * tabela verdade
 * not v = f
 * not f = v
 * 
 */


const resultado = 5 < 3
console.log(!resultado)


//delimitação de strings

//primeiro exemplo com
const aspasSimples = 'Olá mundo!'
//console.log(aspasSimples)
//segundo exemplo com //para quebrar linha usamos caracteres de escapa como o comando \n
const aspasDuplas = "Olá eu sou o \nJavascript. Eu sou melhor que o \nPython"
//console.log(aspasDuplas)

//---------------------------------------------------------------------------

//delimitando com crase
const textoComCrase = `Olá eu sou o Javascript.
Eu sou melhor que o 
Python.`

//metodos das strings = funcções que execultam uma tarefa determinada

const texto = 'O Javascript foi criado alguns anos após o Python. No entanto, o Javascript é bem mais bacana.'
console.log(texto)
console.log(texto.toUpperCase()) //transforma todas as letra em letras maiusculo
console.log(texto.toLowerCase()) //transforma todas as letras em letras minusculas

console.log(texto.concat(' A linguagem C é a mãe de todas as linguagens.'))//ele concatena com a variavel definida)
//
console.log(texto.substring(2, 12)) // ele recorta a frase/valor e retorna o valor de acordo com o indice que indica.
//substituir palavras
//case sensitive
console.log(texto.replace('Javascript', 'Rust'))//substitui a primeira ocorrencia da pesquisa
//trocar todas as palavras que deseja substituir
console.log(texto.replaceAll('Javascript', 'Kotlin'))
//expressao regular
//console.log(texto.replace(/Javascript/g, 'PHP'))
//console.log(texto.replace(/Javascript/gi, 'PHP))//de maneira global ignorando se ela tem letra maiuscula 

const html = '<!DOCTYPE html>\n<html></html>'

console.log(html.startsWith('<!DOCTYPE html>'))//pesquisa se a variavel/valor começa com ' frase desejada' // retorna o valor booleano
console.log(html.endsWith('</body>')) //verifica se termina com valor desejado

//metodo trim = remove espaço do começo e fim e não entre as palavras

const msg = '                                 Olá, mundo'
console.log(msg)
console.log(msg.trim()) 
 
 //para contar a quantidade de caractere
 let senha = 'sonic'

 console.log(senha.length)
 console.log(senha.length >= 8)

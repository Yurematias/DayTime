// Tudo função man 
console.log(typeof String)
console.log(typeof Array)
console.log(typeof Number)
console.log(typeof Function)
console.log(typeof Object)

let nome = "Yure Matias"

// esse método retorna um array com a string separada
// se for '' ele separa por caracter
// se for ' ' ele separa por palavra
// se for alguma letra ele elimina a letra e e separa os lados que ficaram
// exemplo, se usar um split('a') na String "Dragon Ball" a String retornada 
// será ["Dr","gon B","ll"]   
console.log("Dragon Ball".split('a'))

// dentro de Arrays existe o método reverse que inverte os elementos dela 
// invertendo as palavras no exemplo a baixo será mostrado ["Piece","One"]
console.log("Invertendo as palavras: " + "One Piece".split(' ').reverse())
// invertendo todas letras
// repare que o split('') separa cada caracter, o split(' ') separa por palavra
console.log("Invertendo todas letras: " + "One Piece".split('').reverse())
// existe o join para pegar esse array juntar todos elementos e retornar uma String
// veja o exemplo:
// o join precisa do parametro '' pra ele entender que precisa juntar todos caracteres
console.log("Juntando palavras invertidas: " + "One Piece".split(' ').reverse().join(' '))
console.log("Juntando letras invertidas: " + "One Piece".split('').reverse().join(''))

// criando um método para fazer tudo acima na função String
// assim toda String poderá fazer isso automáticamente
String.prototype.reverter = function(){
    return this.split('').reverse().join('')
}  

console.log("AMENO DORIME".reverter())
// agora tudo ficou mais fácil 

// duas formas de inverter
// criando função dentro do objeto prototype de todas as Strings
String.prototype.reverse = function(){
    return this.split('').reverse().join('')
} 
// ou criando uma função de modo normal para depois ser usada
// eu prefiro essa, pois não se adiciona nada no prototype de String 
// evitando assim que todas Strings passem a ter esse método criado
// se deve ter muito cuidado ao ao mexer nos prototypes padrão
reverts = element => element.split('').reverse().join('')

console.log("Yure".reverse())
console.log(reverts("Yure"))
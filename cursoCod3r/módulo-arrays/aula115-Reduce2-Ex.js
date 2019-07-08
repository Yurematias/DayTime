const personagens = [
    {nome: "Luffy", pirata: true},
    {nome: "Fujitora", pirata: false},
    {nome: "Sabo", pirata: false},
    {nome: "Kaidou", pirata: true}
]
// simplificando para um array que só conterá o valor dos atributos "pirata" com true e false
const array = personagens.map(elemento => elemento.pirata)
console.log(array)

const todosPiratas = (acumulador, atual) => acumulador && atual
const algumPirata = (acumulador, atual) => acumulador || atual

console.log(array.reduce(todosPiratas));
console.log(array.reduce(algumPirata));


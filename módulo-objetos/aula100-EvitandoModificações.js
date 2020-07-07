// previne extender objeto, pode-se remover e alterar, o que não pode é adicionar novos atributos
const obj = Object.preventExtensions({anime: "Naruto", genero: "Genero"}) 
// comprovando
console.log(Object.isExtensible(obj))

// o seal sela o objeto, ou seja não pode remover nem adicionar apenas alterar 
const pessoa = Object.seal({nome: "Jubileu"})
//comprovando
console.log(Object.isSealed(pessoa))


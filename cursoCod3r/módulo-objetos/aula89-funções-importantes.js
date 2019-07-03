// Object.assign()
// método que junta os dados de objetos, caso o nome de um atributo seja igual ele sobrescreve
const o1 = {a: 4,b: 4, c: 3}
const o2 = {d: 44}
const o3 = {x: 40, y: 212, a: 30}
const junção = Object.assign(o1,o2,o3)
console.log(junção)

const pessoa = {
    nome: "Paulo",
    whatsapp: "999705612"
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

// forma de congelar o objeto inteiro, para nao ser alterado nenhum dado dele depois 
Object.freeze(pessoa)

// forma de congelar individualmente um atributo de um objeto 
Object.defineProperties(pessoa,"nome",{
    enumerable = false,
    writable = false
    // é possivel atribuir o valor tbm exemplo
    // value = "Naruto"
})
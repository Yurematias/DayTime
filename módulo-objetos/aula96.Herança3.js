const father = {
    corDaPele: "branca",
    olhos: "castanhos"
}

// forma de herança via instanciação de objetos 
// automaticamente o objeto daughter herdará father desta forma 
// é possível definir outros atributos próprios do filho como fiz a seguir...
const daughter = Object.create(father, {
    // é possível restringir um atributo caso seja atribuído um objeto  
    // e alterar o writable e enumerable 
    altura: {value: 1.60, writable: false, enumerable: true}
})

// é possível tambem adicionar uma propriedade nova a um objeto 
// o defineProperty adciona caso não exista, se existir ele modifica 
Object.defineProperty(daughter, "peso", {
    value: "49.5 kg",
    writable: false,
    enumerable: true
})
daughter.peso = "55 kg"
console.log(daughter.peso)

for (const key in daughter) {
    // has own property retorna true se o elemento da iteração pertencer ao próprio objeto 
    // retorna falso se pertencer ao objeto pai 
    if (daughter.hasOwnProperty(key)) 
        console.log(key + " atributo próprio")
    else
        console.log(key + " veio por herança")
}
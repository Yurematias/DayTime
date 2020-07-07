// para fazer heranças em JavaScript basta colocar no 
// atributo __proto__ o objeto pai que o filho deve herdar

// exemplo:

const fam = {
    familia: "Hominidae"
}

const esp = {
    genero: "Homo",
    especie: "sapiens",
    subespecie: "sapiens",
    __proto__: fam
}

// o interpretador js tentará achar o atributo no filho
// caso não ache ele tentará achar no do pai
// se não achar no do pai ele procura no que está acima de pai
// assim funciona a cadeia de heranças do JavaScript

// exemplo com taxonomia do gato 

const t0 = {reino: "animalia"}
const t1 = {filo: "chordata", __proto__:t0}
const t2 = {classe: "Mammalia", __proto__:t1}       
const t3 = {ordem: "carnivora", __proto__:t2}
const t4 = {familia: "Felidae", __proto__:t3}
const t5 = {genero: "Felis", __proto__:t4}
const t6 = {especie: "Felis catus",__proto__:t5}

// repare que o t6 não tem reino, ele procurará nos objetos pais até encontrar o reino
console.log(t6.reino)

// os dados visíveis quando tentar acessar são somente do filho
// não considerando as heranças 
console.log(Object.entries(t6))

const avo = {altura: 1.64}
const pai = {altura: 1.70}
const filho = {}
// existe outra forma de estabelecer herança, isso através do Object.setPrototypeOf
Object.setPrototypeOf(filho, pai)
Object.setPrototypeOf(pai, avo)
console.log(filho.altura)
// a saída é 1.70
// como podem ver a altura de pai sobrescreveu (sombreou) a altura de avo 

const father = {   
    speak: () => "Im the father"
}
const son = {
    speak(){
        // para acessar o método do objeto pai usa-se o super exemplo:
        console.log("Im the son and my father says " + super.speak())
    }
}
Object.setPrototypeOf(son,father)

father.speak()
son.speak()
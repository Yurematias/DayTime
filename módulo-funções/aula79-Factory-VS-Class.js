// há como declarar classes da forma tradicional, no entanto isso não é tão bom
// pois o this pode variar quando colocado em uma classe, assim como em funções 
// em notação literal declaradas com function()
class Pessoa{
    constructor(nome){
        this.nome = nome
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

let p1 = new Pessoa("Yure")

// era possível resolver esse problema do this variar com a função bind 
// para amarrar o this ao objeto de pessoa, ficaria da seguint forma...
// p1.falar.bind(Pessoa)

p1.falar()

// outra forma é instanciar com funções arrow factory, para assim amarrar o this 
let PessoaFact = nome => {
    return {
        falar: () => console.log("Meu nome é " + nome)  
    }
}
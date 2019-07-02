// há 3 diferentes formas de criar moldes para instanciar objetos no JavaScript 
// por classe, por função constutora ou por função factory, cada uma pode ser mais 
// útil dependendo da situação. 
// obs: na classe e na construtora o this varia
// em uma factory declarada via arrow function não

// classe 
class Pessoa{
    constructor(nome){
        this.nome = nome
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

// função construtora 
function Pessoa2(nome)
{
    // era possível ocultar a o this.nome = nome
    // entretando seria impossível de acessar o valor futuramente 
    this.nome = nome
    this.falar = function(){
        console.log("Meu nome é " + this.nome)
    }
}

let p1 = new Pessoa("Yure")
p1.falar()

let p2 = new Pessoa2("Yure Matias")
p2.falar()

// função factory, não necessita do this 
let criarPessoa = nome => {
    return {
        falar: () => console.log("Meu nome é " + nome)  
    }
}

p3 = criarPessoa("Oliveira")
p3.falar()
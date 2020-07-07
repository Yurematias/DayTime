class Pessoa {
    constructor(nome , rg, idade)
    {
        this.nome = nome
        this.rg = rg
        this.idade = idade 
    }
    getNomeRG() {
        return this.nome + this.rg
    }
}

const p1 = new Pessoa("AAAA","35sdgdr")
console.log(p1)

class Aluno extends Pessoa
{
    constructor(_matricula)
    {
        super("Maasfaxv","5040ESD","20")
        this.matricula = _matricula
    }
    getMatricula(){
        return this.matricula + "2019"
    }
}

const p2 = new Aluno(4545)
console.log(p2)

function Pessoa(nome,idade,cpf)
{
    this.setNome = function(name){
        nome = name
    }
    this.getNome = function(){
        return nome
    }
    this.setIdade = function(age){
        idade = age
    }
    this.getIdade = function(){
        return idade
    }
    this.setCpf = function(id){
        cpf = id
    }
    this.getCpf = function(){
        return cpf
    }
}

const p1 = new Pessoa("Yure",19,"708-046-544-33")

console.log(p1.getNome())

p1.setNome("Yure Matias")

console.log(p1.getNome())
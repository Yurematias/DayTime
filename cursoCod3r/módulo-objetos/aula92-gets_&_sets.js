const pessoa = {
    _nome: null,   // no javascript não há o private nem atrubutos privados
             // assim por convenção definiram que o _ (underline) simboliza um atributo privado 
    set nome(nome){
        this._nome = nome
    },
    get nome(){
        return this._nome    
    }
}

// o javascript já entende que quando vai ser adicionado um valor em nome 
// o método a ser chamado é o set 
pessoa.nome = "Yure"

// quando nome é chamado, o método a ser chamado é o get 
console.log(`Meu nome é ${pessoa.nome}`)

// factory
const criarPessoa = _nome =>
{
    return {
        _nome,
        set nome(nome){
            this._nome = nome
        },
        get nome(){
            return this._nome
        }
    }
}

const p2 = criarPessoa("Matias")
console.log(p2.nome)

// função construtora 
function Pessoa(nome){
    this._nome = nome
    this.setNome = function(nome){
        this._nome = nome
    }
    this.getNome = function(){
        return this._nome
    }
}

const joao = new Pessoa
console.log(joao.getNome())
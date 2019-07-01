// uma função construtora funciona da mesma forma que uma classe 
// o construtor é o parametro da função construtora
// neste caso os valores 200 e 5 são atribuídos no construtor
// caso não seja passado nada na instanciação. 
// obs: não é possível declarar funções construtoras com arrowFunctions
function Carro(veloMax = 160, delta = 10)
{
    // para declarar atributos privados usa-se o let ou var 
    // é como se fosse o private do Java 
    let veloAtual = 0

    // para delcarar métodos públicos usa-se a palavra this 
    // para setar uma variável que conterá o método  
    // assim basta atribuir normalmente a function() 
    // funciona da mesma forma que o método public do Java 
    this.acelerar = function()
    {
        if(veloAtual + delta <= veloMax)
            veloAtual += delta
        else 
            veloAtual = veloMax    
    }
    this.getVeloMax = function()
    {
        return veloMax
    }
    this.getVelocidade = function()
    {
        return veloAtual
    }
}

// esta é a forma de instanciar objetos no javascript não
// usa-se a declaração padrão var, const ou let
// logo após é definido o nome para o objeto que no caso é bugatti 
// neste exemplo foi passado os valores 400 e 25 para o construtor
// da classe ou função construtora (eu acho que é a mesma coisa)
let bugatti = new Carro(430,25)

console.log('A velocidade do bugatti atual é de ' + bugatti.getVelocidade())
bugatti.acelerar()
console.log(`o bugatti foi para a velocidade ${bugatti.getVelocidade()}`)

// mais um exemplo de instanciação de objetos 
let fusca = new Carro(110, 5)

console.log("A velocidade do fusca é " + fusca.getVelocidade())
fusca.acelerar()
console.log("O fusca acelerou e a velocidade foi pra " + fusca.getVelocidade())

// é possível também ocultar os parenteses da instanciação do objeto 
// desta forma os atributos do construtor do objeto serão os padrões, exemplo:
let corsa = new Carro 
function MeuObjeto(){}
console.log(MeuObjeto.prototype)

const ob = {

}

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__)
console.log(obj1.__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)

MeuObjeto.prototype.nome = "Anônimo"

MeuObjeto.prototype.falar = function(){
    console.log("Bom dia meu nome é " + this.nome)
} 

obj1.falar()
obj1.nome = "Mikasa Ackerman"
obj1.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = "Objeto 3"
obj3.falar()

// toda instancia de MeuObjeto herda da função construtora MeuObjeto
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
// O atributo __proto__ da função MeuObjeto aponta por padrão de Function.prototype
// toda função criada pelo desenvolvedor tem um __proto__ que aponta para Function.prototype (exceto a função Object que aponta pra nada)
console.log(MeuObjeto.__proto__ === Function.prototype)
// Function.prototype por padrão aponta para o mais alto na arvore de heranças o Object.prototype
console.log(Function.prototype.__proto__ === Object.prototype)

// o atrbituto __proto__ do objeto prototype da função Object não aponta pra nada, por isso o valor é null, executa aí pra ver...
console.log(Object.prototype.__proto__ === null)

// RESUMINDO, OBJETOS TEM __proto FUNÇÕES TEM prototype
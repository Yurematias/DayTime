// todo objeto tem um atributo __proto__ pré-definido que aponta para o Object.prototype
// veja a seguir 

// Object é uma função 
// prototype é um objeto que fica dentro da função Object, confuso não? 

const pessoa = {
    nome: "sdgsjdgis"
}

console.log(pessoa.__proto__ === Object.prototype)
console.log(Object.prototype)


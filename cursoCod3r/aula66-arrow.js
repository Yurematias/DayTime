// // o retorno para arrowFunctions de uma linha é implícito 
// const a = (a = 1,b = 1) => a*b

// console.log(a(8))

// // o this de arrowFunctions nunca varia 
// ele sempre apontará para o elemento do contexto ao qual foi criado
// nunca varaiando independente de onde a função for chamada

// var pessoa = {
//     idade: 25,
//     envelhecer: () =>
//     {
//         (this.idade)++
//     }
// }

// pessoa.envelhecer()
// console.log(pessoa.idade)
ob = {
    a(param)
    {
        console.log(this === param)
    }
}

ob.a(this)
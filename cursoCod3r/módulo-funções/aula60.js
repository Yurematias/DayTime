
// declarar funções dentro de array, funciona como se fosse um dado comum 
// let array = [(a,b) => {return a+b},50,40,3]

// for (const i in array) {
//     if (typeof array[i] == "function") 
//         console.log(array[i](40,30))   
//     else
//         console.log(array[i])
// }

// é possível também declarar funções dentro de outras funções 
// const x = (a,b)  =>
// {
//     return function(c)
//     {
//         return a+b+c
//     }
// }

// como a saída de x(4,3) é outra função então basta colocar outro parenteses () para acessar a função de 
// retorno de x, esta que soma os 3 valores e retorna o resultado. 
// console.log(x(4,3)(1))

// var objeto = {}

// criar método dinamicamente dentro de objeto
// chaves em arrowFunctions são opcionais, funcionando da mesma forma que laços e condicionais. 
// caso não seja passado parametros para o método soma, são considerados os valores 0 para ambos.
// objeto.soma = (a = 0,b = 0) => console.log(a+b)

// objeto.soma(2, 5)

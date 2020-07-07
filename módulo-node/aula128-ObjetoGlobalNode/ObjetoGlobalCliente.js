// quando um elemento é colocado como global, é possível acessálo sem armazenar em variável 
// basta apenas usar o require 
require("./ObjetoGlobal")       

global.objeto.nome = "Aqui está o objeto global"

console.log(global.objeto.nome);   
console.log(objeto.nome);         // é póssivel ocultar o global 
console.log(objeto.somar(5,8));


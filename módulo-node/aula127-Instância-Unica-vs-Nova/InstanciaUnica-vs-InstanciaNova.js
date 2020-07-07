// há como exportar arquivos através de instancia única e de instancia nova (via Factory)

// ao fazer o require de um arquivo que simplesmente atribui no module.exports o objeto
// quando for usálo qualquer instancia desse objeto será alterada 
// exemplo 
// note que require vai retornar uma função, assim para execuála logo em seguida coloca-se os parenteses
// esta função retorna um objeto, afinal é uma função Factory tlgd?

const nova = require("./Factory-Exports")()
const nova2 = require("./Factory-Exports")()

nova.nome = "Nameless King"
nova2.nome = "Dragonborn"

// o resultado vai aparecer diferente porque são duas instancias diferentes 

console.log(nova.nome);
console.log(nova2.nome);

// usando o próprio objeto sendo atribuído no module.exports isso nao acontece 
// mesmo que haja duas variaveis recebendo o require, ambas vão ser a mesma instancia 
// dessa forma se alterar uma altera a outra ta ok?

const unica = require("./Unique-Exports")
const unica2 = require("./Unique-Exports")

unica.nome = "Geralt de Rivia"
unica2.nome = "Arthur Morgan" 

console.log(unica.nome);
console.log(unica2.nome);




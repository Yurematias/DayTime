// usando função do lodash para testar

// é possível usar módulos de terceiros, primeiro é preciso instalar o modulo 
// para isso é precisso abrir o terminal na pasta que deseja instalar o módulo do Node

// e assim usar o comando npm - <nomeDoModulo>

// neste caso usando o modulo lodash fica

// npm i lodash

// para instalar um modulo como sendo global usa-se o -g depois do i

// importando o módulo lodash
const _ = require('lodash')

setInterval(() => console.log(_.random(-500, 250)), 1000)



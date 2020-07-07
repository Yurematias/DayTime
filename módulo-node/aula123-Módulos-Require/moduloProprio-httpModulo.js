// é possível criar o próprio módulo do node e chamá-lo com o require
// para criar tem que ser colocado um módulo na pasta node_modules
// o require chama o arquivo index.js por padrão, se não for encontrado
// ocorrerá erros

// para acessar módulos que estão na pasta node_modules basta colocar o nome do módulo diretamente
// independente de diretórios
const m = require("meuModulo")
console.log(m.teste);

// alguns módulos já vem pré-instalados no node
// um deles é o http

const http = require("http")
http.createServer((req, res) => {
    res.write("Bom dia")
    res.end()
}).listen(8080)
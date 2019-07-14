// para escrever arquivos, utiliza-se tambem um módulo core, o file system

const fs = require('fs')

let obj = {
    produto: "notebook",
    preço: 2200,
    marca: "ASUS"
}

obj = JSON.stringify(obj)

// primeiro o nome do diretorio junto com o nome do novo arquivo
// segundo parametro é o objeto que irá ser salvo no disco 
// terceiro parametro é o uma callback que determina o que será feito caso ocorra um erro 
// o único parametro da callback é o elemento erro 
fs.writeFile(__dirname + "/novoArquivo.json", obj, error => console.log(error || "Arquivo gerado"))
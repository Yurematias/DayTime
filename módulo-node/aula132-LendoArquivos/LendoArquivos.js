const fs = require('fs')

// a variável __dirname vem por padrão no módulo node e armazena o caminho atual
// lendo arquivo txt
let caminho = __dirname + "/arquivoSimples.txt"
const txt = fs.readFileSync(caminho, 'utf-8')
console.log("Foi lido: " + txt + " do arquivo: arquivoSimples.txt\n");

caminho = __dirname + "/arquivo.json"

// forma síncrona de leitura, só segue a execução caso tenha lido o arquivo inteiro 
let jsonLido = fs.readFileSync(caminho, 'utf-8')
console.log(jsonLido);

// forma assíncrona de leitura, essa é melhor porque segue executando mesmo que o arquivo não tenha sido 
// completamente lido
fs.readFile(caminho, (error,content) => {
    content = JSON.parse(content)
    if(error == null)
        console.log(`${content.db.user} : ${content.db.pass}`)
})

// forma mais simples de usar arquivo, funciona apenas com JSON
// no require o JSON é automaticamente convertido para objeto
const config = require('./arquivo.json')

console.log("\n",config);

// lendo pastas, forma assincrona
fs.readdir("D:/Documentos/ProjetosWeb/cursoCod3r",  (error, files) => {
    console.log(files);
})

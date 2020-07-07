// para instalar o axios que faz requisições de servidores remotos basta 
// usar o npm i axios

// mas para criar o arquivo package.json vamos usar o npm i --save axios
// o package.json serve para descrever o projeto bem como descrever todas as dependencias
// que precisam ser instaladadas, como os módulos por exemplo.

const axios = require("axios")
const woman = (element) => element.genero == 'F' 
const chinese = (element) => element.pais == 'China'
const menorSalario = (func,funcAtual) => {
    return (funcAtual.salario < func.salario) ? funcAtual : func
}

// pegando arquivo json de servidor remoto 
// then é para executar assim que pegar, o response pega o arquivo JSON convertido para objeto
axios.get("http://files.cod3r.com.br/curso-js/funcionarios.json").then(function(response){
    let funcionarios = response.data
    funcionarios = funcionarios.filter(chinese).filter(woman).reduce(menorSalario)
    console.log(funcionarios);
})


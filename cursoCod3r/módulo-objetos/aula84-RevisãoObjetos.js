// é possível instanciar objetos e atribuir os valores dinamicamente 
const animal = new Object;

animal.especie = "Leopardo"
animal.classe = "Mammalia"
animal.correr = () => "Estou correndo"
animal.correr.bind(animal)

console.log(animal.correr())

const pessoa = {
    nome: "João",
    email: "joão@outlook.com",
    dataNascimento: {
        ano: "2001",
        mês: "04",
        dia: "01",
        hora: {
            hora: "14",
            minuto: "50"
        }
    }
}

// há duas formas de acessar dados dos objetos, atráves dos pontos ou cochetes
// funcionando como um vetor associativo, onde a string representa o nome do atributo
// essa forma é boa de se usar quando o nome do atributo não está pré-definido 
console.log(pessoa["dataNascimento"]["hora"]["minuto"])
console.log(pessoa.dataNascimento.hora.minuto)

// remover um objeto que tem muitas dependencias removera todos os dados contidos 
delete pessoa.dataNascimento.hora
// assim a saída abaixo será undefined 
console.log(pessoa.dataNascimento.hora)
// se tentar acessar algo do undefined retornará erro 
//console.log(pessoa.dataNascimento.hora.minuto)
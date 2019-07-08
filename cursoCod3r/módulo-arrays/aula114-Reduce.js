const array = [30,20,10,50,40]

// reduce serve para simplificar ou reduzir um array a um simples valor
// por padrão o reduce rebe acumulador, elementoAtual, indice e o array
// assim como o map, foreach e filter, a diferença é que tem o acumulador antes
const soma = array.reduce(function(acumulador,atual,indice,array){
    return acumulador+atual
}) 

const subtração = array.reduce((acumulador, atual) => acumulador-atual)

console.log(array);
console.log(soma);
console.log(subtração);

// o segundo parametro do reduce é o acumulador 
// caso não seja passado nenhum valor para ele
// o primeiro elemento, e o atual considera o segundo elemento
// caso seja colocado o valor no acumulador, o atual será o primeiro elemento
// exemplo:

const vetor = [3,2,1,5,4]
// neste caso o acumulador começará em 10 e seguirá multiplicando por cada elemento
// ao final o resultado de tudo será passado para o mult
const mult = vetor.reduce((acumulador, atual) => acumulador*atual,10)
console.log(vetor);
console.log(mult);


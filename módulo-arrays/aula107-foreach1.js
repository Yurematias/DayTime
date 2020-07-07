const vetor = ["CJ", "Trevor", "Michael", "Niko Belic", "Franklin"]

// no for each ele recebe primeiro o valor do elemento, dps o indice, dps o array inteiro
vetor.forEach(function(valor, indice, vetor){
    console.log(valor);
    console.log(indice);
    console.log(vetor.slice(0, indice+1))
    console.log("---------------------------------");
})

// implementando o forEach
Array.prototype.simulationForEach = function(fn){
    for (let index = 0; index < this.length; index++) {
        fn(this[index], index, this)
    }
}

vetor.simulationForEach(function(valor, indice, vetor){
    console.log(valor);
    console.log(indice);
    console.log(vetor.slice(0, indice+1))
    console.log("---------------------------------");
})

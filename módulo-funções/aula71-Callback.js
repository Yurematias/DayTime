const idades = [30,10,14,24,19,18,14,80]

// É possível fazer uma filtragem em um vetor usando o método filter 
// neste caso ele pega as idades igauais ou superiores a 18 e colocam em um novo array
// sem a necessidade de usar laços de repetição ou metodos push
var deMaior = idades.filter(function(age){
    return age >= 18
})

// simplificando com o uso de arrowFunction 
var deMaior = idades.filter(age => age >= 18)

console.log(idades)

console.log(deMaior)

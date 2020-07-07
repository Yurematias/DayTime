const animais = ['cachorro','papagaio','leão','tigre']
console.log(animais);

animais.pop() // remove o ultimo elemento do array 
animais.sort() // ordena tudo do array em ordem alfabética
animais.shift() // remove o primeiro elemeneto do array 
animais.unshift("girafa") // adiciona elemento no início da Array
animais.push("tatu") // adiciona elemento no fim do array
// remove o elemento de indice 2 do array 
// o segundo parametro determina quantos elementos serão excluídos a pardir dali
animais.splice(2, 1)

console.log(animais);
console.log(animais[2]);
// é possível também adicionar elementos junto com o splice logo após a exclusão
animais.splice(0, 2, "macaco", "cobra")
console.log(animais);
// para eliminar nenhum basta colocar 0 no segundo parametro
animais.splice(1, 0, "elefante", "garça", "esquilo")
console.log(animais);

animais.reverse()// inverte o array 
console.log(animais);
// o join() junta os elementos e retorna uma string
// coloca a string do parametro na separação de cada elemento
texto = animais.join(' <-> ')
console.log(texto);

// o slice retorna um subconjuto do array
// neste exemplo ele pega do elemento 1 ao 3
// o fim determina até onde dele deve pegar, dispensando o ultimo ex
// se for do 1 ao 7, ele pegará do 1 ao 6 understand?
algunsAnimais = animais.slice(1,4)
console.log("alguns animais = " + algunsAnimais);

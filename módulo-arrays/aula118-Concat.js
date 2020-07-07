const array = [2,4,3,1]
const array2 = [20,10,50]

// o método concat retorna o array junto com os elementos passados por parametro
// se for outro array ele simplesmente junta ao original como se fosse um só
// caso seja dados comuns ele simplesmente os adiciona 

console.log(array);
console.log(array2);
console.log(array.concat(array2));
console.log(array2.concat([2,4,5,2],["qaga","sdgsd",[3,4],true]));
console.log([].concat([3,2,5], 1000, 40, {nome: "Objeto", cod: "AAAAA"}));




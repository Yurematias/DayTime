const nums = [1,2,3,4,5]
console.log(nums);
// parecido com foreach, só que o map retorna um novo array ao invés de modificar
// cada elemento deste novo array será definido em cada iteração de retorno
cubo = nums.map(value => value**3)
// equivalente a notação literal de função
// cubo = nums.map(function(value){
//     return value**3
// })
console.log(cubo)

json1 = '{"nome": "Zoro","recompensa": 320000}'
json2 = '{"aluno":"Irineu","notas": [7.3, 7, 5.5]}'
json3 = '{"animal": "tigre", "tamanho": 3}'

// convertendo array de jsons para array de objetos

const jsons = [json1, json2, json3]
console.log("-----------> JSONS <---------");
console.log("cada elemento tem o tipo",typeof jsons[0]);
jsons.forEach(value => console.log(value))
console.log("-----------> CONVERTIDO PARA OBJETO <---------");
jsonObjects = jsons.map(value => JSON.parse(value)) 
console.log("cada elemento tem o tipo",typeof jsonObjects[0]);

jsonObjects.forEach(value => console.log(value))
// isso equivale a esse for abaixo 
// for (const key in jsonObjects) {
//     console.log(jsonObjects[key])
// }

const numbers = [4, 23, 30, 17]
console.log(numbers);
console.log("convertendo para float ---->");
const toFloat = numbers.map(value => parseFloat(value).toFixed(2).replace('.',','))
console.log(toFloat);

// usando diversos maps seguidos 
const sum10 = value => value+10
const mult2 = value => value*2
const square = value => value*value

const ns = [3,4,5]

// como o retorno de cada map é um array, então ele tem um map próprio
// utilizando-se disso ta aí um procedimento que
// soma 10 depois multiplica por 2 e depois faz o quadrado 
const modifiedArray = ns.map(sum10).map(mult2).map(square)
console.log(modifiedArray);

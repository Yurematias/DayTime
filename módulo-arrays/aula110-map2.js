const jogos = [
    '{"nome": "Skyrim", "preço": 50}',
    '{"nome": "Dark Souls 3", "preço": 90}',
    '{"nome": "FIFA 19", "preço": 170}',
    '{"nome": "Cyberpunk 2077", "preço": 220}'
]

// construindo um array com apenas preços através do array de JSONS acima
//let preços = jogos.map(elemento => JSON.parse(elemento)).map(elemento => elemento.preço)

const tornarObjeto = elemento => JSON.parse(elemento)
const deixarPreços = elemento => elemento.preço

let preços = jogos.map(tornarObjeto).map(deixarPreços)
console.log(preços);

// implementando o map

Array.prototype.mapa = function(função){
    const array = []
    for(let i = 0; i < this.length; i++)    
        array.push(função(this[i], i, this))
    
    return array
}

let array = [10,10,30,30]
console.log("normal: ",array);

array = array.mapa(elemento => elemento*2)
console.log("modificado: ",array);

// exercitando a implementação do map 
Array.prototype.mapear = function(callback){
    let array = new Array
    for (let key = 0; key < this.length; key++)
        array.push(callback(this[key], key, this))
    return array    
}

let values = [2,3,4]
console.log(values);
values = values.mapear(valor => valor**3)
console.log("MAIS UMA VEZ NUMS CUBOS: ", values);






















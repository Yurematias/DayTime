const celulares = [
    {nome: "Galaxy S10", preço: 3000 ,marca: "Samsung"},
    {nome: "Iphone X", preço: 4500 ,marca: "Apple"},
    {nome: "Moto G-5S", preço: 750 ,marca: "Motorola"},
    {nome: "Galaxy Pocket", preço: 200, marca: "Samsung"}
]
console.log(celulares);
const celularesBaratos = celulares.filter(cel => cel.preço <= 800)
console.log("\n",celularesBaratos,"\n");
console.log("Caro e da Samsung");

const carosSamsung = celulares.filter(cel => cel.preço >= 1000).filter(cel => cel.marca == "Samsung")
console.log("\n",carosSamsung);

// implementando o filter 
Array.prototype.filtrar = function(callback){
    array = []
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this))
            array.push(this[i])
    }        
    return array
}

const celularesDePobre = celulares.filtrar(cel => cel.preço <= 800)
console.log("\nCelulares de pobre\n",celularesDePobre,"\n");
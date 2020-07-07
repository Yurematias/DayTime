// uma função factory é uma função que retorna objetos 
function fabricarObjetos(produto, preço, marca)
{
    return {
        marca,
        produto,
        preço
    }
}

const prod1 = fabricarObjetos("Moto G-5S",750.50,"Motorola")
console.log(prod1)

const prod2 = fabricarObjetos("Woodstock TW29",600,"Tagima")
console.log(prod2)
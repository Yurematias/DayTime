const getArea = (base, altura) => base*altura

const compra = {
    meses: 24,
    parcela: 120,
}

console.log(getArea(400, 200))

console.log(getArea.call(compra, compra.meses, compra.parcela))

console.log(getArea.apply(compra, [compra.meses, compra.parcela]))
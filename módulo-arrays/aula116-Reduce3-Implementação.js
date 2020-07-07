// implementando o reduce, FIZ SOZINHO SEM NEM CHEGAR NO VÍDEO 
Array.prototype.reduzir = function(callback, acumulador = this[0]){
    const vet = this
    if(acumulador != this[0])
        vet.unshift(acumulador)
    for(let i = 1; i < vet.length; i++)
        acumulador = callback(acumulador, vet[i], i, this)
    return acumulador
}

const values = [2,3,0,4]
console.log(values);
console.log(values.reduzir((acumulador, atual) => acumulador+atual, 10))
// se for colocado o operador ... significa que todos valores recebidos após ele 
// serão concatenados em uma array 
const fn = (...params) => params

console.log(fn(4,3,5,6,7,"dsfgdsffhd",49349,true))

// outro exemplo

function concat(...elementos){
    return elementos
}

console.log(concat(7,8,"sgdsg0",4,"sygfyasdygb"))


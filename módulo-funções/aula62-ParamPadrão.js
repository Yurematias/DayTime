function somar(a,b,c)
{
    // colocar o || 0 depois na atrubuição significa dizer que se 
    // o parametro nao tiver sido recebido e contiver o valor NaN
    // ele vai assummir o valor de 0, o que poderia ser qualquer valor 
    //a = (isNaN(a)) ? 0 : a

    // in arguments verifica se a posição 0 recebeu algo como argumento
    // se sim coloque a na variavel, senão coloque 0 para prevenir o undefined 
    a = (0 in arguments) ? a : 0
    b = (isNaN(b)) ? 0 : b
    c = (isNaN(c)) ? 0 : c

    return a+b+c
}

console.log(somar(2,3))

// melhor forma 

function a(a = 1, b = 1)
{
    return a+b
}
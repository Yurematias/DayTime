document.getElementById('confirm').addEventListener('click',showPA)

function showPA()
{
    var razão = Number(document.getElementById('razão').value)
    var início = Number(document.getElementById('início').value)
    var fim = Number(document.getElementById('fim').value)
    if(razão == 0 || fim == 0)
    {
        alert("Por favor, preencha todos os campos")
        return 0
    }
    var resultado = document.createElement("div")
    resultado.setAttribute('id','resultado')
    document.body.querySelector("section#interface").appendChild(resultado)
    document.getElementById('resultado').innerHTML = `<BR>`
    
    for(let i = 0, contLinha = 0; i < fim; início+=razão, i++, contLinha++)
    {        
        if(i == fim - 1)
            document.getElementById('resultado').innerHTML += `${início}.`
        else    
            document.getElementById('resultado').innerHTML += `${início},`
        if(contLinha == 10)
        {
            document.getElementById('resultado').innerHTML += `<BR>`
            contLinha = 0
        }
    }
}
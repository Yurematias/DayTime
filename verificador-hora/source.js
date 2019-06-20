function carregar()
{
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora}:${data.getMinutes()} `

    if(hora > 13 && hora < 18)
    {
        img.src = "morning.jpg"
        msg.innerHTML += 'da tarde'
        document.body.style.backgroundColor = "red"
    }    
    else if(hora < 13 && hora > 0)
    {
        img.src = "day.jpg"
        msg.innerHTML += 'da manhã'
        document.body.style.backgroundColor = "orange"
    }
    else 
    {
        img.src = "night.jpg"    
        msg.innerHTML += 'da noite'
        document.body.style.backgroundColor = "#000022"
    }
}
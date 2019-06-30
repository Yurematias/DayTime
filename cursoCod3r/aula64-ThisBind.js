const pessoa = {
    nome: "Dragonborn",
    shout: "Fus Ro Dah",
    power()
    {
        console.log(this.shout)
    }
}

// o resultado dará undefined se atribuído desta forma 
poder = pessoa.power

// para isso existe a função bind que amarra o this a um elemento exemplo:
poder = pessoa.power.bind(pessoa)

// desta forma o this será atribuído fixamente ao objeto pessoa, sem variação 
poder()
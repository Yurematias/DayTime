function validate() {
    let inputs = document.body.getElementsByTagName('input')
    document.getElementById('res').style.color = 'red'

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value.length == 0) {
            document.getElementById('res').innerHTML = '<h2>Preencha os campos corretamente</h2>'
            return false
        } else {
            document.getElementById('res').innerHTML = ''
        }
    }
    return true
}

function calculate() {
    if (validate()) {
        let inputs = document.body.getElementsByTagName('input')
        let resultado = (Number(inputs[0].value) / (Number(inputs[1].value) * Number(inputs[1].value))).toFixed(1)
        document.getElementById('res').innerHTML = `<h2>${resultado}</h2>`
        checkWeight(resultado)
    }
}

function checkWeight(resultado) {
    if (resultado < 18.5)
        document.getElementById('res').innerHTML += ` Abaixo do peso`
    else if (resultado <= 24.9)
        document.getElementById('res').innerHTML += ` Peso normal`
    else if (resultado <= 29.9)
        document.getElementById('res').innerHTML += ` Levemente acima do peso`
    else if (resultado <= 34.9)
        document.getElementById('res').innerHTML += ' Obesidade grau I'
    else if (resultado <= 39.9)
        document.getElementById('res').innerHTML += ' Obesidade grau II'
    else
        document.getElementById('res').innerHTML += ' Obesidade grau III'
} 
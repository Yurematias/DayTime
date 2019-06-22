function showTab()
{
    let num = Number(document.getElementById("number").value)
    let opcao
    if(document.getElementById("number").value.length == 0)
        alert("Preencha o campo do número")
    else
    {
        document.getElementById("tabuada").innerHTML = ''
        for (let i = 1; i <= 10; i++)
        {
            opcao = document.createElement("option")
            opcao.text = `${num} * ${i} = ${num*i}`
            opcao.value = "tab" + i
            document.getElementById("tabuada").appendChild(opcao)
        }
    }
}
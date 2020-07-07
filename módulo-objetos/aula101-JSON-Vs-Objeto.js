const objeto = {
    nome: "Celular",
    marca: "Motorola",
    modelo: "Moto G5S",
    preço: 780,
    apps: ["Spotify","Chrome","Instagram","Whatsapp"],
    tocar(){
        return "Hello Moto"
    }  
}

// transferir objeto para JSON, o método irá sumir
Text = JSON.stringify(objeto)
console.log("JSON gerado a partir do objeto")
console.log(Text)

Jeyson = '{"nome": "motocicleta", "velocidade": 100, "pessoa": {"a":5,"b":7},"valores": []}'
// nomes de atributos sempre com aspas duplas 
// geração de objeto a partir do JSON
generated_object = JSON.parse(Jeyson)
console.log("Objeto gerado a partir do JSON")
console.log(generated_object)

console.log(generated_object.__proto__ === Object.prototype)

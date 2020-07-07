// para não definir tudo no escopo global, é possível definir uma função que é imediatamente chamada
// o objetivo disso é não declarar tudo no escopo global, evitando assim bugs quando o projeto tem 
// vários scripts podendo gerar confusão com as variáveis que estão globais. 
// A função IIFE é declarada da seguint forma...

(function(){
    console.log("Hello World")
    console.log("Esta mensagem foi imediatamente chamada")
})()
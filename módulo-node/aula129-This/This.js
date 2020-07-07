console.log("this === module.exports = ",this === module.exports); // true  
console.log("this === exports = ",this === exports);        // true 
console.log("this === module = ",this === module);         // false 
console.log("this === global = ",this === global);


const a = () => console.log("ARROW = ",this); // false 
                                              // this de arrow function não aponta pra global
a()

function b(){
    console.log("LITERAL FUNCTION =",this === global);           // true 
}                               // this de funções literais apontam para o objeto delas,
b()                             // se não estiver em objetos apontam para global

const x = {
    a: "sfgsf",
    write: function(){ console.log(this)}
}

x.write()
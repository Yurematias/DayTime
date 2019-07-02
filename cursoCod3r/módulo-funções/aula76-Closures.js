// let scope = "global"

// function outside()
// {
//     let scope = "local"
//     function inside()
//     {
//         console.log(scope)
//         return " "
//     }
//     return inside
// }

// console.log(outside()())

// const a = outside() 
// console.log(a())

let scope = "fora"

function a()
{
    let scope = "dentro"
    show()    
}

function show()
{
    console.log(scope)
}

a()

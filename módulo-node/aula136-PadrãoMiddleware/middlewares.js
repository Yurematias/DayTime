// o middleware pattern ou chain of responsability é um padrão de projeto
// que ao invés de colocar tudo em uma única função que faz tudo
// ele separa esta função em várias que podem ser executadas uma aós a outra 
// além disso também podendo mudar a ordem, neste exemplo há um uso do middleware 
// para adcionar valores dinamicamente em atributos de objetos 
// o ctx é o parametro do objeto a ser recebido, o next é uma callback que será  
// a função next a ser executada que dirá o proximo passo a ser executado 


const step1 = (ctx, next) => {
    ctx.value1 = "mid1"
    next()
}

const step2 = (ctx, next) => {
    ctx.value2 = "mid2"
    next()
}

const step3 = ctx => ctx.value3 = "mid3"

const exec = (ctx, ...middlewares) => {
    const execStep = index => {
        if(middlewares && index < middlewares.length)
            middlewares[index](ctx, () => execStep(index+1))
    }
    execStep(0)
}

const ctx = {}

exec(ctx, step2, step1, step3)
console.log(ctx);

// a ordem de execução dos passos pode ser alterada apenas mudando a 
// ordem dos parametros na chamada da função 

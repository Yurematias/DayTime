const escola = [{
    nome: "Informática",
    alunos: [{
        nome: "joão", 
        nota: 9.5
    },{
        nome: "Maria",
        nota: 8.8
    }]
},{
    nome: "Agropecuária",
    alunos: [{
        nome: "Sofia",
        nota: 9.7
    },{
        nome: "Henrique",
        nota: 6.5
    }]
}]

const getNota = aluno => aluno.nota
const getNotasTurma = turma => turma.alunos.map(getNota)

const notas1 = escola.map(getNotasTurma)
console.log(notas1);

// o flatMap é uma função que não vem no javaScript porém ela costuma ser implementada
// ela serve como sendo um map junto com um concat, no qual ele modifica os valores normalamente
// e se tiver outros arrays dentro do array eles são substitídos por apenas os elementos 
// eliminando assim os cochetes, é como se pegasse uma matriz do javaScript e achatasse para um vetor
Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasTurma)
console.log(notas2);

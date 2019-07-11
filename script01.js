
let nomeDoAluno = prompt("Digite o nome do aluno ");
let materia = prompt("Digite a matéria: ");
let nota = prompt("Digite a nota: ");
// let nota1 = prompt("Digite a nota 1: ");
// let nota2 = prompt("Digite a nota 2: ");
// let media
// media = (nota1 + nota2) /2;

let media = 6
if(Number(nota) >= media){
    // alert("Parabéns, o aluno " + nomeDoAluno + "foi aprovado na matéria" + materia);
    alert(`Parabéns, o aluno ${nomeDoAluno} foi aprovado na matéria ${materia}`);
}else if(Number(nota) >= media - 0.5){
// alert("O aluno" + nomeDoAluno + "foi aprovado na matéria " + materia + "aprovado pelo sistema");
alert(`O aluno ${nomeDoAluno} foi aprovado na matéria ${materia}aprovado pelo sistema`);
}else{
    // alert("Parece que a nota do aluno " + nomeDoAluno + "na matéria" + materia + "foi insulficiente" ); 
    alert(`Parece que a nota do aluno ${nomeDoAluno} na matéria ${materia} foi insulficiente` ); 
}

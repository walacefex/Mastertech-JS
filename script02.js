// Minha resolução
// let lanceEscadas = prompt("Digite a quantidade de lances de escadas desejados: ");
// let materialEscada = prompt("Digite o material da Escada: ");

// let contador = 0;
// let contador2 = 0;
// let escada = "";

// while(contador < lanceEscadas){
//     while(contador2 <= contador){
//     escada += materialEscada;
//     contador2++;
//     }
//     console.log(escada);    
//     contador++;
// }

// Solução professor
let lancesDeEscadas = Number(prompt("Quantos lances de escada você gostaria?"));
let material = prompt("Qual material?");
let desenho = "";
let i = 0;


while (isNaN(lancesDeEscadas)){
    lancesDeEscadas = prompt(`Você digitou ${lancesDeEscadas}. O programa só aceita valores numéricos, por favor passe um valor numerico.`);
}


while(i < lancesDeEscadas){
    desenho = desenho + material;
    console.log(desenho);
    i++;
}

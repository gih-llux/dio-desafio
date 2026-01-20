// Função que calcula o saldo e o nível do herói
function calcularRankeadas(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel = "";

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return { saldoVitorias, nivel };
}

// Laço de repetição (exemplo de execução)
let vitorias = 85;
let derrotas = 20;

let resultado = calcularRankeadas(vitorias, derrotas);

// Saída final
console.log(
    `O Herói tem de saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}`
);

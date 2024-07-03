function calcularRank(vitorias, derrotas) {
    // Calcular o saldo de vitórias
    let saldoVitorias = vitorias - derrotas;
    let nivel;

    // Determinar o nível com base no número de vitórias
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    }

    // Exibir a mensagem com o saldo de vitórias e o nível
    console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);
}

// Teste da função com diferentes valores de vitórias e derrotas
calcularRank(15, 5); // Exemplo de saída: "O Herói tem de saldo de 10 está no nível de Bronze"
calcularRank(45, 20); // Exemplo de saída: "O Herói tem de saldo de 25 está no nível de Prata"
calcularRank(90, 5); // Exemplo de saída: "O Herói tem de saldo de 85 está no nível de Diamante"
calcularRank(120, 10); // Exemplo de saída: "O Herói tem de saldo de 110 está no nível de Imortal"
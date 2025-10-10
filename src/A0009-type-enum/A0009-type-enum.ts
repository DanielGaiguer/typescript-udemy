// Pode ser alterado a chave dos valores, caso esteja por padrao vai ser semelhante a um array
// A chave pode ser tanto numeros quanto strings
// Voce pode acessar qualquer um dos lados, basta usar o valor do lado inverso, como vermelho ou 10
enum Cores {
    VERMELHO = 10,
    AZUL = 100,
    AMARELO = 200,
}
// Pode ser feito um merge nestes enums, unindo eles
enum Cores {
    ROXO = 'ROXO',
    VERDE = 201,
    ROSA,
}

//console.log(Cores);
//console.log(Cores.VERMELHO);
//console.log(Cores[10]);
//console.log(Cores.ROXO);

function escolhaCor(cor: Cores): void {
    console.log(Cores[cor]);
}

escolhaCor(Cores.ROXO);

// E um tipo de uma funcao ou metodo que Nunca ira retornar nada, por exemplo um loop infinito ou um erro
export function criaErro(): never {
    throw new Error('Erro qualquer');
}

criaErro();

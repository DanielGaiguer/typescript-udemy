// Type alias e definir tipos assim como variaveis por exemplo
type Idade = number;
type Pessoa = {
    nome: string;
    idade: Idade;
    salario: number;
    corPreferida?: string;
};
type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type CorPreferida = CorRGB | CorCMYK;

const pessoa: Pessoa = {
    idade: 30,
    nome: 'Daniel',
    salario: 200_000, //200000
};

export function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
    // Devido ao spread operator, o objeto original nao e mutado
    return { ...pessoa, corPreferida: cor };
}

console.log(setCorPreferida(pessoa, 'Azul'));

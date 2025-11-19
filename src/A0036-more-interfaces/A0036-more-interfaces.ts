interface Pessoa {
    nome: string;
}

interface Pessoa {
    readonly sobrenome: string;
}

interface Pessoa {
    readonly enderecos: readonly string[];
}

interface Pessoa {
    readonly idade?: number;
}

const pessoa: Pessoa = {
    nome: 'Daniel',
    sobrenome: 'Gaiguer',
    enderecos: ['Av Brasil'],
};

console.log(pessoa);

interface PessoaProtocolo<T = string, U = number> {
    nome: T;
    sobrenome: T;
    idade: U;
}

type PessoaProtocolo2<T = string, U = number> = {
    nome: T;
    sobrenome: T;
    idade: U;
};

const aluno1: PessoaProtocolo<string, number> = {
    nome: 'Daniel',
    sobrenome: 'Gaiguer',
    idade: 17,
};

const aluno2: PessoaProtocolo<number, number> = {
    nome: 123,
    sobrenome: 456,
    idade: 17,
};

const aluno3: PessoaProtocolo2 = {
    nome: 'Daniel',
    sobrenome: 'Gaiguer',
    idade: 17,
};

console.log(aluno1, aluno2, aluno3);

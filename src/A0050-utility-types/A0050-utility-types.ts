// Utility types são genericos prontos já do Typescript, estes são os mais usados:

//Record:
// Record é um tipo para objetos, onde o primeiro valor é o tipo da chave do objeto, e o segundo é o tipo do valor do objeto.
const objeto1: Record<string, string | number> = {
    nome: 'Daniel',
    sobrenome: 'Gaiguer',
    idade: 17,
};

console.log(objeto1);

type PessoaProtocol = {
    nome?: string;
    sobrenome?: string;
    idade?: number;
};

//Required
// Transforma tudo que é opcional, em requerido
type PessoaRequired = Required<PessoaProtocol>;
// Partial
// Tranforma tudo que é requerido, em opcional
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type PessoaPartial = Partial<PessoaRequired>;
// Readonly
// Tranforma tudo em readonly
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type PessoaReadonly = Readonly<PessoaRequired>;
// Pick
// Permite que você escolha as coisas do objeto que você deseja utilizar
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type PessoaPick = Pick<PessoaRequired, 'nome' | 'sobrenome'>;

const objeto2: PessoaProtocol = {
    nome: 'Daniel',
    sobrenome: 'Gaiguer',
    idade: 17,
};

console.log(objeto2);

// Extract e Exclude
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';

//O Exclude computa todos os tipos que estão em ABC, que não estão em CDE.
type TipoExclude = Exclude<ABC, CDE>; // Só vai sobrea o A, B;

// O Extract computa todos os tipos que estão em ABC, que podem ser atribuídos nos tipos de CDE
type TipoExtract = ABC; // Só vai sobrar o C;

// Hard Code:
/*
type AccountMongo = {
    _id: string;
    name: string;
    age: number;
};

type AccountApi = {
    id: string;
    name: string;
    age: number;
};

const accountMongo: AccountMongo = {
    _id: 'beduewcbewuf89344rf43-rev',
    name: 'Daniel',
    age: 17,
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
    const { _id, ...accountData } = accountMongo;
    return { ...accountData, id: _id };
}

const accountApi = mapAccount(accountMongo);

console.log('API:');
console.log(accountApi);
*/

type AccountMongo = {
    _id: string;
    name: string;
    age: number;
};

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
    id: string;
};

const accountMongo: AccountMongo = {
    _id: 'beduewcbewuf89344rf43-rev',
    name: 'Daniel',
    age: 17,
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
    const { _id, ...accountData } = accountMongo;
    return { ...accountData, id: _id };
}

const accountApi = mapAccount(accountMongo);

console.log('API:');
console.log(accountApi);

//Module mode
export default 1;

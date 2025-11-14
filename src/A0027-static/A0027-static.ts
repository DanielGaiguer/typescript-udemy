// SuperClasse
export class Pessoa {
    constructor(
        public readonly nome: string,
        public readonly sobrenome: string,
        public readonly idade: number,
        public cpf: string,
    ) {}

    static falaOi(): void {
        //Um metodo estatico nao tem acesso ao metodo pela instancia da pessoa
        console.log('Oi');
    }
}

const pessoa = new Pessoa('Daniel', 'Gaiguer', 16, '000.000.000-00');
pessoa.cpf = '111.111.111-11';
console.log(pessoa); //Nao tem acesso aqui, pela instancia
Pessoa.falaOi(); //Mas aqui tem, pela classe

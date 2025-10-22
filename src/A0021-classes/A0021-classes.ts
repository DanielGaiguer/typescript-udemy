export class Empresa {
    //Public - Pode ser acessado e alterado fora da classe
    // readonly - Nao pode ser alterado, mas pode ser lido
    // Ou seja, este no´me nunca mais vai poder ser alterado
    // Inferir o tipo neste caso e redundante, mas nao tem problema ser atribuido
    public readonly nome: string;
    // Ele vai aceitar, somente objetos criados pela classe colaborador
    private readonly colaboradores: Colaborador[] = [];

    constructor(nome: string) {
        this.nome = nome;
    }
}

export class Colaborador {}

const empresa1 = new Empresa('Facebook');
console.log(empresa1);
//empresa1.nome = 'Youtube'; //Vai reclamar, ja que é readonly
console.log(empresa1.nome);

//Public - Pode ser acessado e alterado fora da classe
// readonly - Nao pode ser alterado, mas pode ser lido
// private - Nao pode ser alterado fora da classe
// Ou seja, este nome nunca mais vai poder ser alterado
// Inferir o tipo neste caso e redundante, mas nao tem problema ser atribuido

export class Empresa {
    public readonly nome: string;
    private readonly colaboradores: Colaborador[] = []; // Ele vai aceitar, somente objetos criados pela classe colaborador
    protected readonly cnpj: string;

    constructor(nome: string, cnpj: string) {
        this.nome = nome;
        this.cnpj = cnpj;
    }

    // O objetivo deste metodo é alterar o valor privado de colaboradores
    addColaborador(colaborador: Colaborador): void {
        this.colaboradores.push(colaborador);
    }

    showColaboradores(): void {
        for (const colaborador of this.colaboradores) {
            console.log(colaborador);
        }
    }
}

// Atalho, forma curta:
export class Colaborador {
    constructor(
        public readonly nome: string,
        public readonly sobrenome: string,
    ) {}
}

const empresa1 = new Empresa('Facebook', '11.111.111/0001-11');
const colaborador1 = new Colaborador('Daniel', 'Gaiguer');
const colaborador2 = new Colaborador('Tailene', 'Marcela');
const colaborador3 = new Colaborador('Eliane', 'Menezes');

empresa1.addColaborador(colaborador1);
empresa1.addColaborador(colaborador2);
empresa1.addColaborador(colaborador3);

console.log(empresa1);

empresa1.showColaboradores();

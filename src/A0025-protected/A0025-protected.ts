//Public - O atributo ou metodo public, quer dizer que ele e acessivel dentro da clsse, fora da classe, e em todas as subclasses, por heranca por exemplo, caso voce nao declare algo como public, ela automaticamente e public

//Private - O atributo ou metodo private, so e acessivel dentro da classe em que ele foi criado, ele e perfeito para encapsulamento, para acessar algo privado de fora da classe, seria opor meio de metodos publicos
export class Empresa {
    public readonly nome: string; //Public nao e necessarioo
    protected readonly colaboradores: Colaborador[] = [];
    private readonly cnpj: string;

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

export class Udemy extends Empresa {
    constructor() {
        super('Udemy', '11.111.111/0001-11');
    }

    popColaborador(): Colaborador | null {
        const colaborador = this.colaboradores.pop();
        if (colaborador) return colaborador;
        return null;
    }
}

// Atalho, forma curta:
export class Colaborador {
    constructor(
        public readonly nome: string,
        public readonly sobrenome: string,
    ) {}
}

const empresa1 = new Udemy();
const colaborador1 = new Colaborador('Daniel', 'Gaiguer');
const colaborador2 = new Colaborador('Tailene', 'Marcela');
const colaborador3 = new Colaborador('Eliane', 'Menezes');

empresa1.addColaborador(colaborador1);
empresa1.addColaborador(colaborador2);
empresa1.addColaborador(colaborador3);

//console.log(empresa1.getNome(), empresa1.nome); //Redundante, pois as duas fazem a mesma coisa

//empresa1.showColaboradores();
const colaboradorRemovido = empresa1.popColaborador();
console.log(colaboradorRemovido);
console.log(empresa1);

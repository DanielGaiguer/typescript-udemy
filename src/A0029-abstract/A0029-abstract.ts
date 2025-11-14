// Classe abstrata e uma classe que serve somente para extender outras classe, ao declarar uma classe como abstrata, sera impossivel instanciar diretamente dela, com a palavra new, mas sera possivel instanciar somente subclasses dessa classe abstrata, que serao chamadas de classes concretas.

export abstract class Personagem {
    protected abstract emoji: string; //Tambem e possivel um atributo ser abstrato, e ser requerido nas subclasses

    constructor(
        protected nome: string,
        protected ataque: number,
        protected vida: number,
    ) {}

    atacar(personagem: Personagem): void {
        this.bordao();
        personagem.perderVida(this.ataque);
    }

    perderVida(forcaAtaque: number): void {
        this.vida -= forcaAtaque;
        console.log(
            `${this.emoji} - ${this.nome} agora tem ${this.vida} de vida`,
        );
    }

    abstract bordao(): void; // Ao dizer uma funcao que ela e abstrata, voce esta apenas referindo um contrato, ela nao tem corpo, porque por si so ela nao faz nada, ela so serve para declarar que todas as subclasses desta super classe, devem ter uma funcao bordao e ele tem que retornar void, apenas isso.
}

export class Guerreira extends Personagem {
    protected emoji = '\u{1F9DD}';

    bordao(): void {
        console.log(this.emoji + ' Guerreira aoooo ataqueeeeee!!!');
    }
}

export class Monstro extends Personagem {
    protected emoji = '\u{1F9DF}';

    bordao(): void {
        console.log(this.emoji + ' MONSTERRRRR!!!');
    }
}

const guerreira = new Guerreira('Guerreira', 100, 1000);
const monstro = new Monstro('Monstro', 87, 1000);

guerreira.atacar(monstro);
guerreira.atacar(monstro);
guerreira.atacar(monstro);
monstro.atacar(guerreira);
monstro.atacar(guerreira);
monstro.atacar(guerreira);

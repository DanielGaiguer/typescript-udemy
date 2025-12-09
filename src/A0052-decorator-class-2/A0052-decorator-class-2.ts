// eslint-disable-next-line @typescript-eslint/no-explicit-any
function inverteNomeECor<T extends new (...args: any[]) => any>(target: T): T {
    console.log('Sou o decorador e recebi', target);
    // O que vai ser usado vai ser esta classe anonima, extendendo a classe Animal, tendo tudo dentro de animal, mas fazendo algumas alterações dentro dela, pela classe anonima
    return class extends target {
        cor: string;
        name: string;

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        constructor(...args: any[]) {
            super(...args);
            this.cor = this.inverte(args[0]);
            this.name = this.inverte(args[1]);
        }

        inverte(valor: string): string {
            return valor.split('').reverse().join('');
        }
    };
}

@inverteNomeECor // Isso é a mesma coisa que inverteNomeECor(Animal), mas acontece automaticamente
export class Animal {
    constructor(
        public name: string,
        public cor: string,
    ) {
        console.log('Sou a classe'); // O construtor da classe, só vai ser chamado assim que instanciar ela
    }
}

// Com o debug, podemos concluir que, ao criar o decorador com @ em cima da classe, a hora que ele irá ser chamado é após a criação da classe, no codigo acima, e voce vai receber a classe Animal em target

const animal = new Animal('cachorro', 'roxo');
console.log(animal);

// E só depois quando instanciar a classe acima, o construtor dela vai ser chamdo, mas como nos estendemos ela, o construtor dela vai ser chamado no super(...args), dentro do construtor extendido, e estes args vai ser cachorro e roxo

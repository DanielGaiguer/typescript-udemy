// Decorator é um objeto impostor, ele finge ser seu objeto, mas no meio do caminho ele pode decorar, ou seja, pode observar o que seu objeto esta fazendo, modificar seu objeto, ou substituir o objeto por completo.

//Decorator no Typescript são funções, que são chamadas em determinadas partes do seu código.
@decorator // Isso, é exatamente o que está comentado lá embaixo
export class Animal {
    // Imagine que assim que você criar uma classe, você quer fazer alguma coisa. Se você quiser fazer isso sem mexer na classe, vai ser necessário criar um decorator para fazer algo a mais do que está classe faz
    constructor(
        public name: string,
        public cor: string,
    ) {}
}

// Foi criado uma função decorator que espera receber uma classe, e ela vai retornar aquilo que ela recebeu

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function decorator<T extends new (...args: any[]) => any>(target: T): T {
    console.log('Oiii, da função decoradora');
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

// Foi criado uma variavel que vai passar pela funcao, que dentro dela vai ter a classe e vai retornar uma classe
//const AnimalDecorated = decorator(Animal); // Não é mais necessário fazer isso

//Antes: const animal = new Animal('roxo');
//Substituido, e isso continua sendo uma classe, já que a funcao ja retorna uma classe
// const animal = new AnimalDecorated('cachorro', 'roxo');

// Voce pode chamar a classe normal, e acima da classe colocar @decorator
const animal = new Animal('cachorro', 'roxo');

//Ou seja, ele fingiu ser o objeto no decorator, mas ele fez uma coisa antes de entregar o objeto.

console.log(animal);

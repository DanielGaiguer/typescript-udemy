export class Pessoa<T, U> {
    constructor(
        public nome: T,
        public idade: U,
    ) {}
}

export class Stack<T> {
    private contador = 0;
    private elementos: { [k: number]: T } = {};

    push(elemento: T): void {
        this.elementos[this.contador] = elemento;
        this.contador++;
    }

    pop(): T | void {
        if (this.isEmpty()) return undefined;

        this.contador--;

        const elemento = this.elementos[this.contador];
        delete this.elementos[this.contador];
        return elemento;
    }

    isEmpty(): boolean {
        return this.contador === 0;
    }

    length(): number {
        return this.contador;
    }

    showStack(): void {
        for (const chave in this.elementos) {
            console.log(this.elementos[chave]);
        }
    }
}

const pilha = new Stack<number>();
pilha.push(1);
pilha.push(2);
pilha.push(3);
pilha.push(4);
const elemento1 = pilha.pop();
pilha.showStack();
console.log(elemento1);

while (!pilha.isEmpty) {
    console.log(pilha.pop());
}

// Geralmente quando voce faz uma acao que seria instanciar uma classe com valores, ou chamar uma funcao ou metodo geralmente quando esses valores ja vão nessa chamada, ele consegue inferir, mas quando os valores nao vao e vao ser criados depois de um tempo, ele nao vai conseguir inferir estes tipos, e cabe a voce inferi-los

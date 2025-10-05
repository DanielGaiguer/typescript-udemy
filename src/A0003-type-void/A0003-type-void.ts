//Void significa uma funcao ou metodo que nao tem retorno
function semRetorno(...args: string[]): void {
    console.log(args.join(' '));
}

const pessoa = {
    nome: 'Daniel',
    sobrenome: 'Gaiguer',

    exibirNome(): void {
        console.log(this.nome + ' ' + this.sobrenome);
    },
};

semRetorno('Daniel', 'Gaiguer');
pessoa.exibirNome();

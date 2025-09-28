/* eslint-disable */
//Tipos basicos(aqui ocorre interferencia de tipos)
let nome: string = 'Daniel';//Qualquer tipo de strings: '' "" ``
let idade: number = 30; // 10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744
let adulto: boolean = true;//true ou false
let simbolo: symbol = Symbol('Qualquer-symbol'); // symbol
//let big: bigint = 10n; //bigint

// Arrays
let arrayDeNumeros: Array<number> = [1,2,3];
let arrayDeNumeros2: number[] = [1,2,3];
let arrayDeString: Array<string> = ['a', 'b'];
let arrayDeString2: string[] = ['a', 'b'];


//Objetos                                       ? - Quer dizer opcional
let pessoa: {nome: string, idade: number, adulto?: boolean} = {
    idade: 30,
    nome: 'Daniel'
}

//Funcoes tipagem- param     param   return
function soma(x: number, y: number):number {
    return x+y;
}

//Quandoo a funcao e referida por dois pontos, a declaracao do retorno deve ser feito desta maneira como um arrow function
const soma2: (x:number, y:number) => number = (x, y) => x + y;


//Resumindo, tudo que vem depois de dois pontos, ate o sinal de igual, tudo isso e type annotation

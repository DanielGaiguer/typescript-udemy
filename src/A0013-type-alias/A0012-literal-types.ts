let x = 10; // eslint-disable-line
x = 0b1010;
//  A variavel X, foi delcarada e o tipo number ja foi inferido a ela, ela pode trocar para qualquer valor, sendo este valor um tipo number, e nao podendo mudar a variavel para o tipo string por exemplo, istro funciona assim pois a variavel foi declarada utilizando let

const y = 10;
// Quando declarado usando const, a variavel nao e declarada com o tipo number, mas sim com o subtipo de number que e o valor 10, ou seja, o tipo de Y so pode ser o valor 10, e nao pode ser outra coisa, nem outro valor nem outro tipo, isto e LITERAL TYPES, ou TIPOS LITERAIS
// Mas voce tambme poderia fazer isto com let desta forma:

let a: 100 = 100; // eslint-disable-line
// Isto e um tipo literal, e um subtipo de number, mas isto NAO E ACONSELHAVEL QUE FACA, O TYPESCRIPT ACONSELHA QUE VOCE UTILIZE CONST AO INVES DE LET PARA ESTES CASOS, desta forma:
let b = 100 as const; // eslint-disable-line
// Isso pode ser facilmente trocado por usar const, mas em alguns caso podem ser interessantes no cao de array ou objetos, que sao mutaveis, voce pode usar isso para deixar aquele valor como imutaveis

const person = {
    // Desta forma aqui, o nome do objeto sempre vai ser este, nao sendo possivel altera-lo
    nome: 'Daniel' as const,
    sobrenome: 'Gaiguer',
};

person.nome = 'Daniel1'; // Ira reclamar, dizdendo que o tipo Daniel1, nao pode ser atribuido ao tipo Daniel

// Outra coisa que podemos fazer, e que juntamento literal types, com union types, podemos ter um enum, mas com a tipagem segura

// Desta forma, ao inves de falar que cor seja uma String, estou sendo bem mais especifico, falando que a quer que a funcao receba uma string, so que nesta string so podem conter os tipos, ou vermelho, ou amarelo ou azul, e esses tipos sao tipos literais
function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
    // Desta forma, o typescript mesmo ja vai autotipar o retorno da funcao, pois ja que ele retorna a cor, os tipos vao ser os mesmos do que o do parametro da funcao, ou voce pode voce mesmo tipar o retorno da funcao para deixa-la mais abrangente, caso mude o valor de cor, deixando a tipagem como uma string, e como estes valores sao subtipos de string, eles irao funcionar perfeitamente da forma com que esta sendo retornado
    return cor;
}

console.log(escolhaCor('Vermelho')); // Aqui o autocomplete funcionara

//Resumindo, com LET podemos criar um tipo mais aberto, mas normalmente para criar tipos literais e usado CONST, e quando nao puder utilizar o CONST, pode ser feito uma ascersao de CONST, fazendo que com aquela chave do objeto tenha o tipo literal, usando "as const" no final dela
//Module mode
export default 1;

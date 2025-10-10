// E a mesma coisa que o any, mas seguro, mas de acordo com a hieraquia de tipos, o unknown e o pai de todos os tipos, o unknown vem antes do any
//Assim como o any, o unklnown deixa voce fazer todas estas coisas, porem ele nao deixa voce somar ou concatenar por exemplo, o deixando mais seguro que o any, para usar o unknown corretamente, antes de fazer somas por exemplo, seria necessario fazer uma verificacao de tipos na variavel unknown
//O unknown vai de forcar a fazer quaLquer checagem de tipos antes de qualquer operacao, o deixando mais seguro que o any que nao te obrigaria
let x: unknown;

x = 100;
x = 'Daniel';
x = 10;
const y = 800;

//console.log(x + y); - Vai dar erro, devido ao unknown sem nehuma verificacao
if (typeof x === 'number') console.log(x + y);

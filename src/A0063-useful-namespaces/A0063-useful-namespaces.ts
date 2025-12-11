import _ from './modulo';

const array = [100, 200, 300, 400];

console.log(global.MYGLOBAL);

console.log(_.sum(array));
console.log(_.min(array));
console.log(_.max(array));
console.log(_.mean(array));
console.log(_.mul(array)); // Nao existe no lodash original

// Desta forma, estamos entrando dentro de coisas que ja existem, e ai fazendo declaration merge da biblioteca que ja existe, com a minha biblioteca, desta maneira pode ser criado o que quiser, dentro da biblioteca

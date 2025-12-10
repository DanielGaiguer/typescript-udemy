// no typescript, para baixar uma biblioteca externa em muitos casos, seria necessaria baixar tambem a tipagem para aquela biblioteca. Mas em alguns casos elas ja vem tipadas.
//Exemplo:
// npm i validator -> instalando somente a biblioteca
// npm i @types/validator -D -> instalando os tipos para aquela biblioteca

import validator from 'validator';
import _ from 'lodash'; // Caso nao tenha os tipos, eo typescript ira reclamar, e ira dizer para tentar rodar, neste caso npm i --save-dev @types/lodash

console.log(validator.isEmail('gaiguer@gmail.com'));
console.log(_.clone([1, 2, 3, 4, 5])); // Isso vai funcionar, mas voce nao vai ter autocomplete, e nao vai ter validacao de tipos, vai ficar tudo como any

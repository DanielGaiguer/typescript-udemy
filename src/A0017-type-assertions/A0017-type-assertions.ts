/* Recomendado */

// Condicioonal
const body1 = document.querySelector('body');
if (body1) body1.style.background = 'red';

// Type assertion
const body3 = document.querySelector('body') as HTMLBodyElement; //Vai dizer que o objeto e daquele tipo, so usar quando ter a certeza que a tipagem esta correta
body3.style.background = 'red';

// HTMLElement
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Qualquer coisa';
input.focus();

/*Nao Recomendado*/
// Type assertion
/*
const body4 = document.querySelector('body') as number; // Nao pode mostrar qualquer tipo, somente subtipos
body4.style.background = 'red';

// Type assertion
const body5 = document.querySelector('body') as unknown as number; //Assim seria a forma correta
body5.style.background = 'red';
*/
//Non-null assertion (!)
const body2 = document.querySelector('body')!; //Essa exclamacao, diz que o elemento nao pode ser null
body2.style.background = 'red';

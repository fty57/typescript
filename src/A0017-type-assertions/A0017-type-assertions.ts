/* Recomendado*/
// Condicional
const body = document.querySelector('body');
if (body) body.style.background = 'red';

// Type assertion, ou seja ele era nulo, agora ele só vai seguir o código se tiver a certeza de que é um HTMLBodyElement
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

// HTMLElement
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Qualquer coisa';
input.focus();

/* Não Recomendado*/

// Non-null assertion (!) Informar que por meio da esclamação que ele não é nulo
const body2 = document.querySelector('body')!;
body2.style.background = 'red';

// Type assertion
const body4 = document.querySelector('body') as unknown as number;

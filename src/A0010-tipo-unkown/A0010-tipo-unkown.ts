// Ele limita em comparação ao tipo any
// Receber algo com alguma coisa mais segura, utilize o unknown
let x: unknown;

x = 100;
x = 'Luiz';
x = 10;
x = 10;
const y = 600;

if (typeof x === 'number') console.log(x + y);

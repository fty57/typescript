let x = 10; //eslint-disable-line
x = 0b1010;

// Observe que Y é do tipo 10
const y = 10;
let a: 100 = 100; //eslint-disable-line
// a = 120;

let b = 100 as const; //eslint-disable-line

// Sempre criar o tipo literal usando const
// Essa pessoa só pode ter o nome Luiz
const pessoa = {
  nome: 'Luiz' as const,
  sobrenome: 'Miranda',
};

export function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul') {
  return cor;
}
console.log(escolhaCor('Azul'));

// Module mode
export default 1;

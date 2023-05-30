enum Cores {
  VERMELHO = 10, // 0
  AZUL = 100, // 1
  AMARELO = 200, // 2
}

enum Cores {
  ROXO = 'Roxo',
  VERDE = 201,
  ROSA,
}

console.log(Cores);
/* console.log(Cores.VERMELHO);
console.log(Cores[10]);
console.log(Cores.ROXO); */

export function escolhaACor(cor: number): void {
  console.log(Cores[cor]);
}

escolhaACor(201);

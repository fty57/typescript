/* eslint-disable */

// Tipos básicos
let nome: string = 'Luiz'; // Qualquer tipo de strings: "" '' ``
let idade: number = 30; // 10, 1.56, -5.55, 0xf0, 0b10101, 0o7744
let adulto: boolean = true; // True ou false
let simbolo: symbol = Symbol('qualquer-symbol'); // Symbol
// let big: bigint = 10n; // bigint

// Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3, 4, 5];
let arrayDeNumeros2: number[] = [1, 2, 3, 4, 5];
let arrayDeStrings: Array<string> = ['a', 'b', 'c', 'd', 'e'];
let arrayDeStrings2: string[] = ['a', 'b', 'c', 'd', 'e'];

// Objetos
let pessoa: { nome: string; idade: number; adulto?: boolean } = {
  nome: 'Álisson',
  idade: 22,
};

// Funções
function soma(x: number, y: number): number {
  return x + y;
}
const soma2: (x: number, y: number) => number = (x, y) => x + y;

// A tupla seria um array com tipos bem específicos
// Um array de tamanho fixo, ele pode ser mutável
// O readyonly deixa a tupla imutável, não se pode fazer pop, push e nem nada
const dadosCliente1: readonly [number, string] = [1, 'Luiz'];
const dadosCliente2: [number, string, string] = [1, 'Luiz', 'Miranda'];
const dadosCliente3: [number, string, string?] = [3, 'Carlos'];
const dadosCliente4: [number, string, ...string[]] = [3, 'Carlos', 'Chavier', 'Mira', 'Domingo'];

/* dadosCliente1[0] = 2;
dadosCliente1[1] = 'Alisson';
dadosCliente1.pop(); */

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

// readonly
const array: readonly string[] = ['Alisson', 'Silva', 'Marcos'];
const array2: ReadonlyArray<string> = ['Alisson', 'Silva', 'Marcos'];

console.log(array);
console.log(array2);

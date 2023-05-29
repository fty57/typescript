// Usar quando se quer ou um tipo ou o outro
function addOrConcact(a: number | string | boolean, b: number | string | boolean): number | string {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a}${b}`;
}

console.log(addOrConcact(10, 20));
console.log(addOrConcact('10', '20'));
console.log(addOrConcact(10, '20'));
console.log(addOrConcact('10', 20));
console.log(addOrConcact(true, true));

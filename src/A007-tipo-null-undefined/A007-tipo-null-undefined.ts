let x;
if (typeof x === 'undefined') x = 20;
console.log(x * 2);

export function createPerson(firstName: string, lastName?: string): {
    firstName: string;
    lastName?: string;
}{
    return{
        firstName,
        lastName,
    };
}

// Permitindo que outros desenvolvedores saibam que o retorno dessa função pode ser null
export function squareOf(x: any){
    if(typeof x === 'number') return x * x; 
    return null;
}

const squareOfTwoNumber = squareOf(2);
const squareOfTwoString = squareOf(2);

if(typeof squareOfTwoString === null){
    console.log('Conta inválida');
}else{
    console.log(squareOfTwoString * 2);
}
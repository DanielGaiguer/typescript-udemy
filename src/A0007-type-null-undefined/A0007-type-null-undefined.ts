let x;
if (typeof x === 'undefined') x = 20;
console.log(x * 2);

export function createPerson( //Parametros
    firstName: string,
    lastName?: string,
): {
    firstName: string; //Retorno da funcao
    lastName?: string;
} {
    return {
        firstName, //A propria funcao
        lastName,
    };
}

export function squareOf(x: any){ //Assim o desenviolvedor consegue checar e tratar caso o retorno seja null
    if (typeof x === 'number') return x * x;
    return null;
}

const squareOfTwoNumber = squareOf(2);
const squareOfTwoString = squareOf('2');

if (squareOfTwoNumber === null) {
    console.log('Conta invalida');
} else {
    console.log(squareOfTwoNumber * 100);
}

// Por exemplo, ao buscar algo na base de daods, o desenvolvedor pode retornar ou a coisa que ele esta buscando, ou null, para nao dar erro de continuidade no codigo

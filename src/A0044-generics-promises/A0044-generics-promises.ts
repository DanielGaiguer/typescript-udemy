const arrayNumeros: Array<number> = [1, 2, 3, 4, 5];

console.log(arrayNumeros);

async function promiseAsync() {
    return 1;
}

//Promise<number> significa: Uma Promise que, quando for resolvida, vai entregar um número. Ou o tipo do valor futuro é um number.
function minhaPromise(): Promise<number> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(1);
        }, 1000);
    });
}

promiseAsync().then((resultado) => console.log(resultado + 1));
minhaPromise().then((resultado) => console.log(resultado + 1));

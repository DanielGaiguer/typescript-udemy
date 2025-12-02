type ObterChaveFn = <O, K extends keyof O>(objeto: O, chave: K) => O[K];

//O → tipo do objeto.
//K → tipo da chave, que deve ser uma das chaves de O (keyof O).

const obterChave: ObterChaveFn = (objeto, chave) => objeto[chave];

//Como o TypeScript já sabe os tipos pelo ObterChaveFn, ele entende automaticamente: que chave só pode ser uma chave válida do objeto e que o retorno é exatamente o valor do tipo daquela chave

const animal = {
    cor: 'Rosa',
    vacinas: ['Vacina1', 'Vacina2'],
    idade: 10,
};

const vacinas = obterChave(animal, 'vacinas');
const cor = obterChave(animal, 'cor');

console.log(vacinas, cor, obterChave(animal, 'idade'));

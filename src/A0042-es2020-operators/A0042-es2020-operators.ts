// Encadeamento opcional e Operador de coalesencia nula

type Documento = {
    titulo: string;
    texto: string;
    data?: Date;
};

const documento: Documento = {
    titulo: 'O titulo',
    texto: 'texto',
    //data: new Date(),
};

//Se a parte esquerda retornar null ou undefined, a parte direita da expressao sera executada
console.log(documento.data?.toDateString() ?? 'Ixi, nao existe data.');
//console.log(undefined ?? 'Ixi, nao existe data.');
//console.log(null ?? 'Ixi, nao existe data.');

//console.log(false ?? 'Ixi, nao existe data.');
//console.log(0 ?? 'Ixi, nao existe data.');
//console.log('' ?? 'Ixi, nao existe data.');

// Semrpre que voce precisar criar um objeto que precisa ser estendido, voce tem duas opcoes, ou voce cria o objeto de uma vez, deixando os parametros que serao extendidos como opcional, ou voce cria um objeto mais aberto, especificando as chaves que devem existir, com o tipo literal, e caso precise criar mais chaves, voce utiliza index signature

const objetoA: {
    chaveB: string; //assim, seta o tipo literal e nao e aberto em relacao aos tipos
    readonly chaveA: string; //Com readonly, o valor da chave nunca mais vai poder ser alterada
    chaveC?: string; // Deixa a chave como opciopnal, para ser criada depois
    [key: string]: unknown; //Index signature, pode criar uma chave fora com qualquer tipo
} = {
    chaveA: 'valor A',
    chaveB: 'Valor B',
};

//objetoA.chaveA = 'Outro valor'; //Erro pois chaveA nao pode ser alterada
objetoA.chaveC = 'Nova Chave';
objetoA.chaveD = 'Nova chave';

// Nao e recomendado utilizar o tipo object, entao essas sao algumas alternativas para trocar ao inves de usar object

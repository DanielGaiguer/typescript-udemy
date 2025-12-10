/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-unused-vars */

namespace MeuNamespace {
    export const nomeDoNamespace = 'Daniel';

    export class PessoaDoNamespace {
        constructor(public nome: string) {}
    }

    const pessoaDoNamespace = new PessoaDoNamespace('Daniel');
    console.log(PessoaDoNamespace);

    export namespace OutroNamespace {
        export const nomeDoNamespace = 'Nome do outro namespace Gaiguer';
    }
}

// Fora do namespace ela nao existe, ou seja, vai dar erro. So é possivel se tiver export

const PessoaDoNamespace = new MeuNamespace.PessoaDoNamespace('Daniel');
console.log(MeuNamespace.nomeDoNamespace);
console.log(MeuNamespace.OutroNamespace.nomeDoNamespace);

export default 1;

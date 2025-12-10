/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-unused-vars */

namespace MeuNamespace {
    export const nomeDoNamespace = 'Daniel';

    export class PessoaDoNamespace {
        constructor(public nome: string) {}
    }

    const pessoaDoNamespace = new PessoaDoNamespace('Daniel');

    export namespace OutroNamespace {
        export const nomeDoNamespace = 'Nome do outro namespace Gaiguer';
    }
}

const constDoNamespace = 'valor da const do namespace';

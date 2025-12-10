/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-unused-vars */
var MeuNamespace;
(function (MeuNamespace) {
    MeuNamespace.nomeDoNamespace = 'Daniel';
    var PessoaDoNamespace = /** @class */ (function () {
        function PessoaDoNamespace(nome) {
            this.nome = nome;
        }
        return PessoaDoNamespace;
    }());
    MeuNamespace.PessoaDoNamespace = PessoaDoNamespace;
    var pessoaDoNamespace = new PessoaDoNamespace('Daniel');
    console.log(PessoaDoNamespace);
    var OutroNamespace;
    (function (OutroNamespace) {
        OutroNamespace.nomeDoNamespace = 'Nome do outro namespace Gaiguer';
    })(OutroNamespace = MeuNamespace.OutroNamespace || (MeuNamespace.OutroNamespace = {}));
})(MeuNamespace || (MeuNamespace = {}));
// Fora do namespace ela nao existe, ou seja, vai dar erro. So é possivel se tiver export
var pessoaDoNamespace = new MeuNamespace.PessoaDoNamespace('Daniel');
console.log(pessoaDoNamespace);
console.log(MeuNamespace.nomeDoNamespace);
console.log(MeuNamespace.OutroNamespace.nomeDoNamespace);
/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="modulo/module.ts" />
// Para isso funciuonar, seria necessario mudar o sistemas de modulos no tc.vonfig, para AMD ou System. Alem disso, voce precisaria configurar o outFile, inves de OutDir. Ou inves de fazer tudo isso, no proprio comando de compilacao, eu falar que eu quero um arquivo só com npx tsc src/A0060-namespaces/index.ts --outFile src/A0060-namespaces/index.js
console.log(MeuNamespace.nomeDoNamespace);

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
    var OutroNamespace;
    (function (OutroNamespace) {
        OutroNamespace.nomeDoNamespace = 'Nome do outro namespace Gaiguer';
    })(OutroNamespace = MeuNamespace.OutroNamespace || (MeuNamespace.OutroNamespace = {}));
})(MeuNamespace || (MeuNamespace = {}));
var constDoNamespace = 'valor da const do namespace';
/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="modulo/module.ts" />
// Para isso funciuonar, seria necessario mudar o sistemas de modulos no tc.vonfig, para AMD ou System. Alem disso, voce precisaria configurar o outFile, inves de OutDir. Ou inves de fazer tudo isso, no proprio comando de compilacao, eu falar que eu quero um arquivo só com npx tsc src/A0060-namespaces/index.ts --outFile src/A0060-namespaces/index.js
// Assim ele vai gerar um index.js com tudo que tem no arquivos arquivos ts
// Essa e uma forma de voce usar typescript puro, para gerar um bundle, voce pode configurar o ts config, ou o comando, mas e muito mais pratico utilizar o sistema de modulos do ES6
console.log(MeuNamespace.nomeDoNamespace);
console.log(constDoNamespace);

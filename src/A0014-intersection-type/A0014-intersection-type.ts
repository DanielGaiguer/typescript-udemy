// & significa interseção de tipos — ou seja, o resultado é um tipo que precisa satisfazer todos ao mesmo tempo.
type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobrenome & TemIdade;

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'D' | 'A';
type Intersecao = AB & AC & AD;
// Aqui, ele vai dizer que o A e a unica intersecao, O tipo Intersecao representa o único valor literal 'A', porque é o único valor que aparece em todos os tipos (AB, AC e AD), ou seja, esta linha e a mesma coisa que dizer type intersecao = 'A'
//let x: Intersecao = 'B'; // ❌ Erro
//let y: Intersecao = 'C'; // ❌ Erro
//let z: Intersecao = 'A'; // ✅ Ok


const pessoa: Pessoa = {
    nome: 'Daniel',
    sobrenome: 'Gaiguer',
    idade: 16,
};

console.log(pessoa);

//Module Mode
export { pessoa };

// Esta e a forma que eles arrumaram de ser possivel fazer a tipagem do this, sendo o primeiro argumento da funcao, mas ele nao e um argumento da funcao
export function funcao(this: Date, nome: string, age: number): void {
    console.log(this);
    console.log(nome, age);
}

// Agora a unica maneira de ser possivel chamar o this nesta funcao, e falando quem e o this dentro dela, usando call do Javascript puro, e obrigatoriamente passar o this como primeiro argumento da funcao
funcao.call(new Date(), 'Daniel', 16);
//Mesma coisa que: funcao("Daniel")
//Ou tambem pode ser
funcao.apply(new Date(), ['Daniel', 16]); //Mas os arguymentos precisam estar em um array

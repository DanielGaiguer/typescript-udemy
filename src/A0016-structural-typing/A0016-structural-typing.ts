// O que e Structural typing?
//Tipagem estrutural significa que o TypeScript não se importa com o nome do tipo,
//mas sim com a forma (estrutura) do valor.

//👉 Dois tipos são compatíveis se têm a mesma estrutura,
//mesmo que tenham nomes diferentes.
type VerifyUserFn = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string };

const VerifyUser: VerifyUserFn = (user, sentValue) => {
    return (
        user.username === sentValue.username &&
        user.password === sentValue.password
    );
};

const bdUser = { username: 'Daniel', password: '123456' };
const sentUser = { username: 'Daniel', password: '887878' };
const loggeIn = VerifyUser(bdUser, sentUser);
console.log(loggeIn);

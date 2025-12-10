// Para permitir importar arquivos JS, e necessario ir no Ts config e habilitar a opcao allowJs
import { soma } from './modulo';

const result = soma(10, 20) as number; //Ou fazer um type cache para tipar

console.log(result);

//Para tipar o arquivo JS, voce pode copia-lo, mudando a extensao de js para ts, e tipando tudo, para nao deixar os tipos como any

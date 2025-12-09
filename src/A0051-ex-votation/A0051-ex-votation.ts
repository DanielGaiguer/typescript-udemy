type VoteProtocol = {
    option: string;
    votes: number;
};

export class VoteInApp {
    private question: string = '';
    private options: VoteProtocol[] = [];
    constructor(question: string, options: VoteProtocol[]) {
        this.question = question;
        this.options = options;
    }

    showQuestionAndOptions(): void {
        console.log(this.question);
        for (const key in this.options) {
            console.log(
                this.options[key]['option'],
                this.options[key]['votes'],
            );
        }
        console.log('##############');
    }

    addVote(option: string): void {
        for (const key in this.options) {
            if (this.options[key]['option'] === option) {
                this.options[key]['votes']++;
                return;
            }
        }
        console.log('Opção não encontrada.');
    }
}

export class OptionForVote {
    private options: VoteProtocol[] = [];

    addOption(option: string): void {
        if (typeof option === 'string') {
            this.options.push({ option: option, votes: 0 });
            console.log('Opção adicionada com sucesso.');
        }
    }

    showOptions(): void {
        for (const key in this.options) {
            console.log(this.options[key]);
        }
    }
}

const options = new OptionForVote();
options.addOption('Morango');
options.addOption('Maca');
options.addOption('Laranja');

const voteOne = new VoteInApp('Qual é a melhor Fruta?', options['options']);
voteOne.addVote('Morango');
voteOne.addVote('Morango');
voteOne.addVote('Morango');
voteOne.addVote('pera');
voteOne.showQuestionAndOptions();

import isEmail from 'validator/lib/isEmail';

const SHOW_ERROR_MESSAGES = 'show-error-message';

const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

if (form) {
    form.addEventListener('submit', function (event: Event) {
        event.preventDefault();
        hideErrorMessages(this);
        checkForEmptyFields(username, email, password, password2);
        checkEmail(email);
        checkEqualPasswords(password, password2);
        if (shouldSendForm(this)) console.log('FORMULÁRIO ENVIADO'); //form.submit();
    });
}

function checkEmail(input: HTMLInputElement): void {
    if (!isEmail(input.value)) showErrorMessage(input, 'Email Inválido');
}

function checkEqualPasswords(
    inputPassword1: HTMLInputElement,
    inputPassword2: HTMLInputElement,
): void {
    if (inputPassword1.value !== inputPassword2.value) {
        showErrorMessage(inputPassword1, 'Senhas distintas');
        showErrorMessage(inputPassword2, 'Senhas distintas');
    }
}

function checkForEmptyFields(...inputs: HTMLInputElement[]): void {
    inputs.forEach((input) => {
        if (!input.value) showErrorMessage(input, 'Campo não pode ficar vazio');
    });
}

function hideErrorMessages(form: HTMLFormElement): void {
    form.querySelectorAll('.' + SHOW_ERROR_MESSAGES).forEach((item) =>
        item.classList.remove(SHOW_ERROR_MESSAGES),
    );
}

function showErrorMessage(input: HTMLInputElement, msg: string): void {
    const formFields = input.parentElement as HTMLDivElement;
    const errorMessage = formFields.querySelector(
        '.error-message',
    ) as HTMLSpanElement;
    errorMessage.innerText = msg;
    formFields.classList.add(SHOW_ERROR_MESSAGES);
}

function shouldSendForm(form: HTMLFormElement): boolean {
    let send = true;
    form.querySelectorAll('.' + SHOW_ERROR_MESSAGES).forEach(
        () => (send = false),
    );
    return send;
}

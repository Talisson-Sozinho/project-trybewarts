const buttonLogin = document.querySelector('.btn-login');
const emailInput = document.querySelector('.email-login-input');
const passwordInput = document.querySelector('.password-login-input');
const agreementCheckbox = document.getElementById('agreement');
const formSubmitButton = document.getElementById('submit-btn');
const textareaInput = document.getElementById('textarea');
const counterLenthTextArea = document.getElementById('counter');

buttonLogin.addEventListener('click', () => {
  if (emailInput.value === 'tryber@teste.com' && passwordInput.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

agreementCheckbox.addEventListener('change', (event) => {
  formSubmitButton.disabled = !event.target.checked;
});

textareaInput.addEventListener('input', () => {
  counterLenthTextArea.innerText = 500 - textareaInput.value.length;
});

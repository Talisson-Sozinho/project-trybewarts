const buttonLogin = document.querySelector('.btn-login');
const emailInput = document.querySelector('.email-login-input');
const passwordInput = document.querySelector('.password-login-input');
const agreementCheckbox = document.getElementById('agreement');
const formSubmitButton = document.getElementById('submit-btn');

buttonLogin.addEventListener('click', () => {
  if (emailInput.value === 'tryber@teste.com' && passwordInput.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

agreementCheckbox.addEventListener('change', (event) => {
  if (event.target.checked) {
    formSubmitButton.removeAttribute('disabled');
  } else {
    formSubmitButton.setAttribute('disabled', 'disabled');
  }
});

const buttonLogin = document.querySelector('.btn-login');
const emailInput = document.querySelector('.email-login-input');
const passwordInput = document.querySelector('.password-login-input');

buttonLogin.addEventListener('click', () => {
  if (emailInput.value === 'tryber@teste.com' && passwordInput.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

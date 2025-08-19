  // Seleciona o formulário
  const form = document.getElementById('login-form');

  // Captura o evento de submit do formulário
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // evita o recarregamento da página

    // Captura os valores atualizados dos inputs
    const email = document.getElementById('email').value;
    const senha = document.getElementById('password').value;

    // Validação simples dos dados do login
    if (email === 'warwar@gmail.com' && senha === '123456') {
      alert('Login realizado com sucesso!');
      // Redireciona para a página feed.html
      window.location.href = '/html/feed.html';
    } else {
      alert('Email ou senha incorretos. Tente novamente.');
    }
  });
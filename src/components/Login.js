import React, { useState } from 'react';
// import { GoogleLogin } from 'react-google-login';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [usuario, setUsuario] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // TODO: Fazer a requisição para o login

    if (email === 'teste@email.com' && senha === '123456') {
      // Simular login
      setUsuario({ nome: 'João Silva' });
      console.log(email)
      console.log(senha)

      window.location.href = '/mesa';
    }
  };

  // const handleGoogleLogin = (response) => {
  //   // TODO: Fazer a requisição para o login com Google
  
  //   const { tokenId } = response;
  
  //   fetch('/api/auth/google', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ tokenId }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // Armazenar o token de autenticação
  //       localStorage.setItem('authToken', data.token);
  
  //       // Redirecionar o usuário para a página inicial
  //       window.location.href = '/';
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
        <button type="submit">Entrar</button>
      </form>
      {/* <GoogleLogin
        clientId="YOUR_CLIENT_ID"
        buttonText="Login com Google"
        // onSuccess={handleGoogleLogin}
        // onFailure={handleGoogleLogin}
      /> */}
      <p>Ainda não tem conta? <a href="/cadastro">Cadastre-se</a></p>
    </div>
  );
}

export default Login;
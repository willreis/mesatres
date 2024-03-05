import React, { useState } from 'react';

function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cpf, setCpf] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Fazer a requisição para cadastrar o usuário

    console.log('Dados do usuário:', nome, email, telefone, cpf);
  };

  return (
    <div className="container">
      <h1>Cadastro</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="number" placeholder="Telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
        <input type="number" placeholder="CPF" value={cpf} onChange={(e) => setCpf(e.target.value)} />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default Cadastro;

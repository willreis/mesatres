import React, { useState } from 'react';
import { QRCode } from 'react-qr-code'; // Ensure this import path is correct

function Mesa() {
  const [numeroMesa, setNumeroMesa] = useState('');

  const handleChamarGarcom = () => {
    // TODO: Fazer a requisição para chamar o garçom

    console.log('Chamar garçom na mesa ' + numeroMesa);
  };

  const handleFecharConta = () => {
    // TODO: Fazer a requisição para fechar a conta

    console.log('Fechar conta da mesa ' + numeroMesa);
  };

  const handleLerQRCode = (data) => {
    // TODO: Fazer a requisição para ler o QR code

    console.log('QR Code lido: ' + data);
  };

  return (
    <div className="container">
      <h1>Mesa</h1>
      <p>Número da mesa: {numeroMesa}</p>
      <input type="number" placeholder="Número da mesa" value={numeroMesa} onChange={(e) => setNumeroMesa(e.target.value)} />
      <button onClick={handleChamarGarcom}>Chamar garçom</button>
      <button onClick={handleFecharConta}>Fechar conta</button>
      <button onClick={handleLerQRCode}>Ler QR Code</button>
      <QRCode value={numeroMesa} />
    </div>
  );
}

export default Mesa;

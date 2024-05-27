import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="container login-form">
      <h2>Faça seu Login</h2>
      <form>
        <div className="input-container">
          <input type="text" placeholder="Nome" required />
        </div>
        <div className="input-container">
          <input type="password" placeholder="Senha" required />
        </div>
        <button type="submit">ENTRAR</button>
      </form>
      <hr />
      <p>Não tem uma conta? <button type="submit">CADASTRE-SE!</button></p>
    </div>
  );
};

export default Login;

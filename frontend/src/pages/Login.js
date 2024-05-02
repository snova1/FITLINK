import React, { useState } from 'react';
import '../hojas-de-estilo/Login.css';
import Header from '../componentes/Header';
import Footer from '../Footer';


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = (e) => {
      e.preventDefault();
      // Aquí puedes añadir la lógica de autenticación
      console.log('Email:', email, 'Password:', password);
    };
  
    return (
      <div className="Login">
            <Header />
            <div className="login-container">
                <form className="login-form" onSubmit={handleLogin}>
                <h2>Login</h2>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Ingresar</button>
                <button type="button" onClick={() => alert('Redirigir a recuperación de contraseña')}>
                    Olvidé contraseña
                </button>
                </form>
            </div>
            <Footer />
        </div>
    );
  }

export default Login;
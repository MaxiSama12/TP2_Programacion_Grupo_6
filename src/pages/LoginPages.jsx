import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/loginPage.css"

const LoginPages = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === '' || password.trim() === '') {
      setError('Todos los campos son obligatorios');
      return;
    }

    // Obtener usuarios registrados de localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Verificar si existe el usuario
    const userFound = users.find(user => user.email === email && user.password === password);

    if (userFound) {
      // Usuario válido
      setError('');
      
      // Guardamos el email del usuario logueado en localStorage
      localStorage.setItem('loggedInEmail', email);

      // Redirigir a Home
      navigate('/');
    } else {
      setError('Email o contraseña incorrectos');
    }
  };

  return (
    <div className="container mt-5 login-cont p-5">
      <h1 className="text-center mb-4">Iniciar Sesión</h1>
      <div className="row justify-content-center">
        <div className="col-12 col-md-6">
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Correo electrónico</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Ingrese su email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Contraseña</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Ingrese su contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="d-grid mb-3">
              <button type="submit" className="btn btn-primary">Ingresar</button>
            </div>
            <div className="text-center">
              <a href="/register">¿No tienes cuenta? Regístrate</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPages;
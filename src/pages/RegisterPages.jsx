import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPages = () => {
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

    // Obtener usuarios existentes
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Verificar si el usuario ya existe
    const userExists = users.some(user => user.email === email);

    if (userExists) {
      setError('Este correo ya está registrado');
      return;
    }

    // Agregar nuevo usuario
    users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(users));

    // Redirigir a login después de registrar
    navigate('/login');
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Registro</h1>
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
                placeholder="Cree una contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="d-grid mb-3">
              <button type="submit" className="btn btn-success">Registrarse</button>
            </div>
            <div className="text-center">
              <a href="/login">¿Ya tienes cuenta? Iniciar Sesión</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPages;

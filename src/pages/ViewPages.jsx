import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ViewPages = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const loggedUserEmail = localStorage.getItem('loggedInEmail'); 

    
    if (!loggedUserEmail) {
      navigate('/login');
      return;
    }

  
    const loggedUser = users.find(user => user.email === loggedUserEmail);
    setUser(loggedUser);
  }, [navigate]);

  return (
    <div className="container mt-5">
      {user ? (
        <>
          <h1 className="text-center mb-4">Bienvenido, {user.email}</h1>
          <div className="text-center">
            <p>Este es tu perfil, donde podrás ver tu información o realizar cambios.</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Contraseña:</strong> {user.password}</p>
          </div>
        </>
      ) : (
        <div className="text-center">
          <h2>Cargando...</h2>
        </div>
      )}
    </div>
  );
};

export default ViewPages;
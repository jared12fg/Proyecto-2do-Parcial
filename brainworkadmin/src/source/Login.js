import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'sweetalert2/dist/sweetalert2.css';
import './styles.css';
import {useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === 'Angel@gmail.com' && password === '12345') {
      navigate('/main');
    } else {
      Swal.fire({
        icon: 'info',
        title: 'Inicio de Sesión Invalido',
        text: 'El correo o la contraseña es incorrecto',
      });
    }
  };

  return (
    <div className='login template d-flex justify-content-center align-items-center vh-100'>
      <div className='form_container p-5 rounded bg-white'>
        <form onSubmit={handleSubmit}>
          <h3 className='text-center'>Inicio de Sesión</h3>
          <br></br>
          <div className='mb-2'>
            <label>Correo electrónico:</label>
            <input
              type='email'
              placeholder='Colocar correo'
              className='form-control cla'
              value={email}
              onChange={handleEmailChange}
            ></input>
          </div>
          <br></br>

          <div className='mb-2'>
            <label>Contraseña:</label>
            <input
              type='password'
              placeholder='Colocar contraseña'
              className='form-control cla'
              value={password}
              onChange={handlePasswordChange}
            ></input>
          </div>
          <br></br>

          <div className='d-grid'>
            <button type='submit' className='btn btn-primary cla'>
              Iniciar Sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

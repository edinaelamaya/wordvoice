import React, { useState, useEffect } from 'react';
import { Editor, EditorState, RichUtils, ContentState, Modifier } from 'draft-js';
import './Login.css';
import VoiceRecognition from '../VoiceRecognition'
import { Link,useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isActive, setIsActive] = useState(false);

  const handleCommand = (command) => {

    let usernameValue = username;  // Inicializa con el valor actual
    let passwordValue = password;

    if (command.includes('michelle usuario')) {
      console.log('usernameValue',usernameValue);
      usernameValue = command.replace('michelle usuario', '').replace(/\s+/g, '');
      setUsername(usernameValue);
    } else if (command.includes('michelle contraseña')) {
      const passwordValue =  command.replace('michelle contraseña', '').replace(/\s+/g, '');
      setPassword(passwordValue);
    } else if (command.includes('michelle inicio')) {
      // Aquí debes agregar lógica para manejar el inicio de sesión
      console.log('Iniciar sesión con', { username, password });
      fetch('https://tu-backend.com/iniciar-sesion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: usernameValue,
          password: passwordValue,
        }),
      })
        .then(response => {
          if (response.ok) {
            // La solicitud fue exitosa, puedes redirigir al usuario a la página de inicio (home)
            console.log('Inicio de sesión exitoso');
            window.location.href = '/home'; // Cambia '/home' a la ruta correcta de tu página de inicio
          } else {
            // La solicitud no fue exitosa, maneja el error según tus necesidades
            console.error('Error al iniciar sesión');
          }
        })
        .catch(error => {
          console.error('Error al realizar la solicitud:', error);
        });
    } else if (command.includes('michelle registro')) {
      // Aquí debes agregar lógica para redirigir al usuario a la página de registro
      console.log('Redirigir a la página de registro');
    }
  };

  

  return (
    <div className='generate'>
      <div className='container-log'>
        <h2>Iniciar sesión</h2>
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={() => console.log('Iniciar sesión')}>Iniciar sesión</button>
      </div>
      <VoiceRecognition onCommand={handleCommand} />
    </div>
  );
}

export {Login};

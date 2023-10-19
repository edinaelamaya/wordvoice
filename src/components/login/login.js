import React, { useState, useEffect } from 'react';
import { Editor, EditorState, RichUtils, ContentState, Modifier } from 'draft-js';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.lang = 'es-ES';

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript.toLowerCase();
      console.log("nombre",transcript)
      if (transcript === 'okay click') {
        console.log("correo")
        setEmail('correo@gmail.com'); 

      } else if (transcript === 'okay click contraseña') {
        
        setPassword('tucontraseña'); 

      } else if (transcript === 'okay') {
        handleLogin();
      }
    };

    recognition.start();
    const timer = setTimeout(() => {
      setIsActive(true);
    }, 300);

    return () => {
      recognition.stop();
      
    },clearTimeout(timer);
    // Aparece con animación después de un breve retraso
    
  }, [isListening]);

  const handleLogin = () => {
    console.log("pase aca")
  };

  return (
    <div className='generate'>
      <div className={`container-log ${isActive ? 'active' : ''}`}>
        <h2>Iniciar sesión</h2>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Iniciar sesión</button>
      </div>
    </div>
  );
}

export {Login};

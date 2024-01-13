import React, { useState } from 'react';
import { useSpring, useTransition, animated } from 'react-spring';
import './App.css';

const App = () => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const toggleContentVisibility = () => {
    setIsContentVisible(!isContentVisible);
  };

  const transitions = useTransition(isContentVisible, {
    from: { opacity: 0, height: 0 },
    enter: { opacity: 1, height: 50},
    leave: { opacity: 0, height: 0 },
  });

  const buttonProps = useSpring({
    scale: 1,
    boxShadow: '0px 0px 0px 0px rgba(0, 0, 0, 0.0)',
    reset: true,
  });

  const handleLogin = () => {
    console.log('Usuario inició sesión');
    // Implementa la lógica de inicio de sesión aquí
  };

  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <header className="App-header">
        <h1>StudyWining</h1>
        <animated.button
          style={{
            transform: buttonProps.scale.to((s) => `scale(${s})`),
            boxShadow: buttonProps.boxShadow,
          }}
          className='login-button'
          onClick={handleLogin}
        >
          Iniciar Sesión
        </animated.button>
      </header>

      <main style={{ flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '20px' }}>
        <div style={{ marginRight: '10px', display: 'flex', alignItems: 'center' }}>
          <button onClick={toggleContentVisibility} style={{ background: '#555', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '5px', cursor: 'pointer', transition: 'background 2s ease' }}>
            {isContentVisible ? '❮' : '>'}
          </button>
        </div>

        {transitions((style, item) => (
          <animated.section
            key="unique-key"
            className='main-section'
            style={{
              ...style,
              overflow: 'hidden',
              
              borderRadius: item ? '10px' : '10000px',
              boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
              color: '#333',
              flex: 5,
              textAlign: 'center',
              margin: '20px',
              display: 'flex',
              flexDirection: 'column', // Agregamos esta línea
              justifyContent: 'center', // y esta línea
            }}
          >
            <h1 style={{ margin: 0, fontSize: '1.5rem' }}>{item ? 'Explicacion de la aplicacion' : 'Expande tu Conocimiento y Gana'}</h1>
          </animated.section>
        ))}
      </main>

      <footer style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#eee', padding: '10px' }}>
        <button style={{ background: '#555', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '5px', cursor: 'pointer', transition: 'background 0.3s ease', marginRight: '10px' }}>
          Política y Privacidad
        </button>
        <p style={{ marginLeft: '10px', flex: 1 }}>&copy; {new Date().getFullYear()} Estudylabs</p>
        <a href="https://twitter.com/tu_usuario_de_twitter" target="_blank" rel="noopener noreferrer">
          <button className='twitter-button' style={{ background: '#1DA1F2', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '5px', cursor: 'pointer', transition: 'background 0.3s ease' }}>
            Síguenos en Twitter
          </button>
        </a>
      </footer>
    </div>
  );
};

export default App;

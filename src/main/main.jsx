import React from 'react';
import './main.css';
import backgroundImage from '../assets/background.jpg';
import Pfp from '../minicrap/pfp/pfp.jsx';

function App() {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '24px'
  };

  return (
    <div className="App" style={backgroundStyle}>
      <header className="App-header">
        <Pfp />
        <h1>GGLVXD</h1>
        <p>Idk, programmer</p>
      </header>
    </div>
  );
}

export default App;

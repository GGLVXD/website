import React from 'react';
import './header.css';

function Header() {
  return (
    <header className="Header">
      <nav className="Nav">
        <div className="Logo">
          <h2>GGLVXD</h2>
        </div>
        <div className="NavLinks">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="https://status.gglvxd.eu.org/">Status</a></li>
            <li><a href="https://dsc.gg/gglvxd">Discord</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;

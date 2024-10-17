// ../comp/Header.jsx
import React from 'react';
import './header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="site-title">GGLVXD.EU.ORG</h1>
        <nav className="navigation">
          <a href="/" className="nav-link">Home</a>
          <a href="https://status.gglvxd.eu.org" className="nav-link">Status</a>
          <a href="/skills" className="nav-link">Skills</a>
          <a href="/projects" className="nav-link">Projects</a>
          <a href="https://blog.gglvxd.eu.org" className="nav-link">Blog</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './main/main.jsx';
import Header from './header/header.jsx';
import Footer from './footer/footer.jsx';

ReactDOM.render(
  <React.StrictMode>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="GGLVXD offical website here are a hosted random things" />
      <meta name="keywords" content="dev, javascript, php, python, minecraft, server, discord, gglvxd, social, about me, linux, terminal, code, ads" />
      <meta name="author" content="GGLVXD" />
      <meta name="robots" content="index,follow" />
    </head>
    <title>GGLVXD website for uses and my socials</title>
    <Header />
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

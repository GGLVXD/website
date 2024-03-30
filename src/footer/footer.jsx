

import React from 'react';
import './footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="Footer">
      <div className="Copyright">
        <p>&copy; 2020 - {currentYear} GGLVXD Website. All rights reserved :D.</p>
      </div>
    </footer>
  );
}

export default Footer;

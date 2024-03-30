import React from 'react';
import './pfp.css';
import pfpImage from './pfp.webp';

function Pfp() {
  return (
    <div className="profile-container">
      <div className="profile-picture">
        <img src={pfpImage} alt="Profile" />
      </div>
    </div>
  );
}

export default Pfp;

import React from 'react';
// import Logout from './user-navigation';

function Header(props) {
  return (
    <div className='navbar travel-header'>
      <div className='container d-flex justify-content-end'>
        <h2>Travel Fever</h2>
        <div className='icon-container'>
          <img src='/images/greenpowerranger.png' alt="user-profile-image" className='icon'/>
        </div>
      </div>
    </div>
  );
}

export default Header;

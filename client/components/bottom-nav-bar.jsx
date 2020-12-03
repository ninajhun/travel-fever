import React from 'react';

function BottomNavBar(props) {
  return (
    <div className="container h-45">

      <nav className="navbar bottom-nav-bar fixed-bottom border-top justify-content-around">
        <i className="fas fa-home fa-lg" onClick={() => props.setView('home', {})}></i>
        <i className="far fa-heart fa-lg"
          onClick={() => {
            props.setView('favorites-page', {});
            props.getMyFavorites(props.user);
          } }></i>
        <i className="fas fa-search fa-lg"
          onClick={() => {
            props.setView('listings-page', {});
            props.getCustomerListings();
          } }></i>
        <i className="far fa-envelope fa-lg" onClick={() => { props.setView('inbox', {}); props.getInbox(props.user); }}></i>
      </nav>

    </div>
  );
}

export default BottomNavBar;

import React from 'react';

class BottomNavBar extends React.Component {

  render() {
    return (
      <div className="container h-45">
        <nav className="navbar fixed-bottom border-top justify-content-around">
          <i className="fas fa-home fa-lg"></i>
          {/* <i className="far fa-heart fa-lg"></i> */}
          {/* <i className="fas fa-search fa-lg"></i> */}
          {/* <i className="far fa-envelope fa-lg"></i> */}
        </nav>

      </div>
    );
  }
}

export default BottomNavBar;

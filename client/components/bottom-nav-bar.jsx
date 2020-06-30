import React from 'react';

class BottomNavBar extends React.Component {

  render() {
    return (
      <div className="container h-45">
        <nav className="navbar fixed-bottom border-top justify-content-around">
          <i className="fas fa-home fa-lg" onClick={() => this.props.setView('home', {})}></i>
          {/* <i className="far fa-heart fa-lg"></i> */}
          <i className="fas fa-search fa-lg" onClick={() => { this.props.setView('listings-page', {}); this.props.getCustomerListings(); } }></i>
          {/* <i className="far fa-envelope fa-lg"></i> */}
        </nav>

      </div>
    );
  }
}

export default BottomNavBar;

import React from 'react';

class Logout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
    this.slideOutLeft = this.slideOutLeft.bind(this);
  }

  slideOutLeft() {
    if (this.state.menuOpen) {
      this.setState({ menuOpen: true });
    } else {
      this.setState({ menuOpen: false });
    }
  }

  render() {
    const { menuOpen } = this.state;

    const menuClass = menuOpen
      ? 'sidenav-open'
      : 'sidenav-closed';

    return (
      <div className='menu'>
        <div className={`${menuClass}`}>
          <h4>My Listings</h4>
          <h4>Log Out</h4>
        </div>
      </div>
    );
  }
}

export default Logout;

import React from 'react';

class Logout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
    this.handleClickOpen = this.handleClickOpen.bind(this);
  }

  handleClickOpen() {
    if (!this.state.menuOpen) {
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
    const overlayClass = menuOpen
      ? 'overlay'
      : '';
    const returnOverlay = menuOpen
      ? 'return-overlay'
      : '';
    return (
      <div>
        <div className='navbar travel-header'>
          <div className='container d-flex justify-content-end'>
            <h2>Travel Fever</h2>
            <div className='icon-container' >
              <img src={this.props.userImg} alt="user-profile-image" className='icon' onClick={this.handleClickOpen} />
            </div>
          </div>
        </div>
        <div className={`${overlayClass}`} >
          <div className={`${returnOverlay}`} onClick={this.handleClickOpen}></div>
          <div className={`${menuClass}`}>
            <h4>My Listings</h4>
            <h4>Log Out</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Logout;

import React from 'react';

class Logout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.multFunct = this.multFunct.bind(this);
  }

  multFunct() {
    this.handleClickOpen();
    this.props.setView('seller-listing-page');
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
        <div className='navbar fixed-top travel-header'>
          <div className='container d-flex justify-content-between'>
            <h2 className="header-text" onClick={() => { this.props.setView('home'); }}>Travel Fever</h2>
            <div className='icon-container' >
              <img src={this.props.userImg} alt="user" className='icon' onClick={this.handleClickOpen} />
            </div>
          </div>
        </div>
        <div className={ overlayClass } >
          <div className={ returnOverlay } onClick={this.handleClickOpen}></div>
          <div className={ menuClass }>
            <div className="mt-4">
              <div className="my-3">
                <h5 className="side-nav" onClick={this.multFunct}>My Listings</h5>
              </div>
              <div className="my-3">
                <h5 className="side-nav" onClick={() => this.props.userLogout()}>Log Out</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Logout;

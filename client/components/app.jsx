import React from 'react';
import LoginPage from './login-page';
import BottomNavBar from './bottom-nav-bar';
import ListingsPage from './listings-page';
import Header from './header';
import CheckoutPage from './checkout-page';
import HomePage from './home-page';
import CreateListing from './create-listing';
import ListingDescription from './listing-description';
import SellerListingCard from './seller-listing-page';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'home', // change back
      currentUser: null,
      listingId: null,
      isAuthorizing: true
    };
    this.setView = this.setView.bind(this);
    this.userLogout = this.userLogout.bind(this);
    this.getUser = this.getUser.bind(this);
    this.getListingId = this.getListingId.bind(this);
  }

  componentDidMount() {
    fetch('/api/auth')
      .then(response => response.json())
      .then(data => {
        this.setState({
          isAuthorizing: false,
          currentUser: data.user
        });
      })
      .catch(err => console.error(err));
  }

  setView(name) {
    this.setState({
      view: name
    });
  }

  userLogout() {
    fetch('api/auth', { method: 'DELETE' })
      .then(() => this.setState({
        currentUser: null,
        view: 'login'
      }));
  }

  getUser(userId) {
    fetch(`api/users/${userId}`)
      .then(result => result.json())
      .then(data => {
        this.setState({
          currentUser: data.user,
          view: 'home'
        });
      })
      .catch(err => console.error(err));
  }

  getListingId(listingId) {
    this.setState({
      listingId: listingId
    });
  }

  render() {
    if (this.state.isAuthorizing) return null;
    if (!this.state.currentUser) return <LoginPage setView={this.setView} getUser={this.getUser}/>;

    let body;

    switch (this.state.view) {
      case 'home':
        body = <HomePage user={this.state.currentUser.userId} setView={this.setView}/>;
        break;
      case 'listings-page':
        body = <ListingsPage user={this.state.currentUser.userId} setView={this.setView} getListingId ={this.getListingId}/>;
        break;
      case 'create-listing':
        body = <CreateListing user={this.state.currentUser.userId} setView={this.setView}/>;
        break;
      case 'check-out':
        body = <CheckoutPage user={this.state.currentUser.userId} setView={this.setView} listingId={this.state.listingId}/>;
        break;
      case 'listing-description':
        body = <ListingDescription user={this.state.currentUser.userId} setView={this.setView} listingId={this.state.listingId} />; // pass this.state.listingId
        break;
      case 'seller-listing-page':
        body = <SellerListingCard user={this.state.currentUser.userId} setView={this.setView}/>;
        break;
      default: body = null;
    }

    return (
      <div>
        <Header userImg={this.state.currentUser.imageUrl} user={this.state.currentUser.userId} userLogout={this.userLogout}/>
        <div className='main-screen'>
          {body}
        </div>
        <BottomNavBar setView={this.setView} user={this.state.currentUser.userId}/>
      </div>
    );
  }
}

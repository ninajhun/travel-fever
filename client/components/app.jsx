import React from 'react';
import LoginPage from './login-page';
import BottomNavBar from './bottom-nav-bar';
import ListingsPage from './listings-page';
import Header from './header';
import CheckoutPage from './checkout-page';
import HomePage from './home-page';
import CreateListing from './create-listing';
import ListingDescription from './listing-description';
import SellerListingPage from './seller-listing-page';
import SellerListingDescription from './seller-listing-description';

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
    this.favoriteListing = this.favoriteListing.bind(this);
    this.toggleFavorite = this.toggleFavorite.bind(this);
    this.addFavorite = this.addFavorite.bind(this);
    this.removeFavorite = this.removeFavorite.bind(this);
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

  addFavorite(listingId) {
    const req = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: this.state.currentUser.userId,
        listingId: listingId
      })
    };
    fetch('/api/favorites', req)
      .then(() => {
        const { favoriteListings } = this.state.currentUser;
        const updateFavorites = favoriteListings.concat(listingId);
        this.setState({
          currentUser: {
            ...this.state.currentUser,
            favoriteListings: updateFavorites
          }
        });
      });
  }

  removeFavorite(listingId) {
    const req = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: this.state.currentUser.userId,
        listingId: listingId
      })
    };
    fetch('/api/favorites', req)
      .then(() => {
        const { favoriteListings } = this.state.currentUser;
        const updateFavorites = favoriteListings.filter(fav => fav !== listingId);
        this.setState({
          currentUser: {
            ...this.state.currentUser,
            favoriteListings: updateFavorites
          }
        });
      });
  }

  favoriteListing(listingId) {
    return this.state.currentUser.favoriteListings.includes(listingId);
  }

  toggleFavorite(listingId) {
    this.favoriteListing(listingId)
      ? this.removeFavorite(listingId)
      : this.addFavorite(listingId);
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
        body = <ListingsPage user={this.state.currentUser.userId}
          setView={this.setView}
          getListingId ={this.getListingId}
          favoriteListing={this.favoriteListing}
          toggleFavorite={this.toggleFavorite}/>;
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
        body = <SellerListingPage user={this.state.currentUser.userId} setView={this.setView} getListingId={this.getListingId}/>;
        break;
      case 'seller-listing-description':
        body = <SellerListingDescription user={this.state.currentUser.userId} setView={this.setView} listingId={this.state.listingId}/>;
        break;
      default: body = null;
    }

    return (
      <div>
        <Header userImg={this.state.currentUser.imageUrl} user={this.state.currentUser.userId} userLogout={this.userLogout} setView={this.setView}/>
        <div className='main-screen'>
          {body}
        </div>
        <BottomNavBar setView={this.setView} user={this.state.currentUser.userId}/>
      </div>
    );
  }
}

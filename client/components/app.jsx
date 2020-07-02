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
import FavoriteListingsPage from './favorite-listings-page';
import Messages from './messages';
import UserInbox from './inbox';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'home',
        params: {}
      },
      inbox: [],
      currentUser: null,
      listingId: null,
      isAuthorizing: true,
      listings: [],
      myFavorites: [],
      messages: []
    };
    this.setView = this.setView.bind(this);
    this.userLogout = this.userLogout.bind(this);
    this.getUser = this.getUser.bind(this);
    this.setListingId = this.setListingId.bind(this);
    this.getCustomerListings = this.getCustomerListings.bind(this);
    this.favoriteListing = this.favoriteListing.bind(this);
    this.toggleFavorite = this.toggleFavorite.bind(this);
    this.addFavorite = this.addFavorite.bind(this);
    this.removeFavorite = this.removeFavorite.bind(this);
    this.getMyFavorites = this.getMyFavorites.bind(this);
    this.getInbox = this.getInbox.bind(this);
    this.getMessages = this.getMessages.bind(this);
    this.sendDm = this.sendDm.bind(this);

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

  getMessages(chatId) {
    fetch(`/api/messages/${chatId}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          messages: data
        });
      })
      .catch(err => console.error(err));

  }

  sendDm(chatId, senderId, recipientId, content) {
    const req = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chatId: chatId,
        senderId: senderId,
        recipientId: recipientId,
        content: content
      })
    };
    fetch('/api/messages', req)
      .then(response => response.json())
      .then(data => {
        const messages = this.state.messages;
        const newMessages = messages.concat(data);
        this.setState({
          messages: newMessages
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
        const updateFavorites = favoriteListings.filter(fav => fav.list !== listingId);
        this.setState({
          currentUser: {
            ...this.state.currentUser,
            favoriteListings: updateFavorites
          }
        });
      });
  }

  favoriteListing(listingId) {
    // this.state.currentUser.favoriteListings.includes(listingId);
  }

  toggleFavorite(listingId) {
    this.favoriteListing(listingId)
      ? this.removeFavorite(listingId)
      : this.addFavorite(listingId);
  }

  setView(name, params) {
    this.setState({
      view: {
        name: name,
        params: params
      }
    });
  }

  getMyFavorites(userId) {
    fetch(`/api/favorites/${userId}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          myFavorites: data
        });
      })
      .catch(err => console.error(err));
  }

  getCustomerListings(locationId) {
    if (!locationId) {
      fetch('api/listings')
        .then(res => res.json())
        .then(list => {
          this.setState({
            listings: list
          });
        });
    } else {
      fetch(`/api/listingsLocations/${locationId}`)
        .then(res => res.json())
        .then(list =>
          this.setState({
            listings: list
          })
        )
        .catch(err => console.error(err));

    }
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
          view: {
            name: 'home',
            params: this.state.view.params
          }
        });
      })
      .catch(err => console.error(err));
  }

  setListingId(listingId) {
    this.setState({
      listingId: listingId
    });
  }

  getInbox(userId) {
    fetch(`/api/inbox/${userId}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          inbox: data
        });
      });
  }

  render() {

    if (this.state.isAuthorizing) return null;
    if (!this.state.currentUser) return <LoginPage setView={this.setView} getUser={this.getUser} getInbox={this.getInbox}/>;

    let body;

    switch (this.state.view.name) {
      case 'home':
        body = <HomePage user={this.state.currentUser.userId} setView={this.setView} getCustomerListings={this.getCustomerListings}/>;
        break;
      case 'listings-page':
        body = <ListingsPage user={this.state.currentUser.userId}
          setView={this.setView}
          favoriteListing={this.favoriteListing}
          toggleFavorite={this.toggleFavorite}
          setListingId={this.setListingId}
          getCustomerListings={this.getCustomerListings}
          listings={this.state.listings} />;
        break;
      case 'create-listing':
        body = <CreateListing user={this.state.currentUser.userId} setView={this.setView}/>;
        break;
      case 'favorites-page':
        body = <FavoriteListingsPage user={this.state.currentUser.userId}
          setView={this.setView}
          favoriteListing={this.favoriteListing}
          toggleFavorite={this.toggleFavorite}
          setListingId={this.setListingId}
          listings={this.state.myFavorites} />;
        break;
      case 'check-out':
        body = <CheckoutPage user={this.state.currentUser.userId} setView={this.setView} listingId={this.state.listingId} getInbox={this.getInbox}/>;
        break;
      case 'listing-description':
        body = <ListingDescription user={this.state.currentUser.userId} setView={this.setView} listingId={this.state.listingId} setListingId ={this.setListingId} />; // pass this.state.listingId
        break;
      case 'seller-listing-page':
        body = <SellerListingPage user={this.state.currentUser.userId}
          setView={this.setView}
          setListingId={this.setListingId}/>;
        break;
      case 'seller-listing-description':
        body = <SellerListingDescription
          user={this.state.currentUser.userId}
          setView={this.setView}
          listingId={this.state.listingId}/>;
        break;
      case 'inbox':
        body = <UserInbox
          user={this.state.currentUser.userId}
          setView={this.setView}
          listingId={this.state.listingId}
          getInbox={this.getInbox}
          inbox={this.state.inbox}
          getMessages={this.getMessages}/>;
        break;
      case 'messages':
        body = <Messages messages={this.state.messages}
          user={this.state.currentUser}
          recipientImg={this.state.view.params.recipientImg}
          recipientId={this.state.view.params.recipientId}
          chatId={this.state.view.params.chatId}
          sendDm={this.sendDm}
        />;
        break;

      default: body = null;
    }

    return (
      <div>
        <Header userImg={this.state.currentUser.imageUrl} user={this.state.currentUser.userId} userLogout={this.userLogout} setView={this.setView}/>
        <div className='main-screen'>
          {body}
        </div>
        <BottomNavBar setView={this.setView}
          user={this.state.currentUser.userId}
          getCustomerListings={this.getCustomerListings}
          getMyFavorites={this.getMyFavorites}
        />
      </div>
    );
  }
}

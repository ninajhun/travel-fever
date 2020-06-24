import React from 'react';
import LoginPage from './login-page';
import Headers from './header';
import BottomNavBar from './bottom-nav-bar';
import Listing from './listing';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'login',
      user: {}
    };
    this.setView = this.setView.bind(this);
    this.getUser = this.getUser.bind(this);
  }

  setView(name) {
    this.setState({
      view: name
    });
  }

  getUser(userId) {
    fetch(`api/users/${userId}`)
      .then(result => result.json())
      .then(data => {
        this.setState({
          user: data
        });
      })
      .catch(err => console.error(err));
  }

  render() {

    if (this.state.view === 'login') {
      return <LoginPage setView={this.setView} getUser={this.getUser}/>;
    } else {
      return (
        <div>
          <Headers userImg={this.state.user.imageUrl}/>
          <Listing/>
          <BottomNavBar />
        </div>
      );
    }

  }

}

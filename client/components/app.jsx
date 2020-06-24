import React from 'react';
import LoginPage from './login-page';
import BottomNavBar from './bottom-nav-bar';
import Header from './header';
import HomePage from './home-page';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'login', // change back
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
    let body;

    this.state.view === 'home'
      ? body = <HomePage />
      : body = null;

    if (this.state.view === 'login') {
      return <LoginPage setView={this.setView} getUser={this.getUser}/>;
    } else {
      return (
        <div>
          <Header userImg={this.state.user.imageUrl} setView={this.setView} />
          {body}
          <BottomNavBar setView={this.setView} />
        </div>
      );
    }

  }

}

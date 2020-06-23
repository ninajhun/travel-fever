import React from 'react';
import LoginPage from './login-page';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'login'
      },
      user: {}
    };
    this.setView = this.setView.bind(this);
  }

  setView(name) {
    this.setState({
      view: {
        name: name
      }
    });
  }

  // componentDidMount() {

  // }

  render() {

    if (this.state.view.name === 'login') {
      return <LoginPage setView = {this.setView}/>;
    } else {
      return <h1>Home Page</h1>;
    }
  }
}

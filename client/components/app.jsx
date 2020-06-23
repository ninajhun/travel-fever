import React from 'react';
import LoginPage from './login-page';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // message: null,
      // isLoading: true
    };
  }

  // componentDidMount() {

  // }

  render() {
    return (
      <LoginPage />
    );
  }
}

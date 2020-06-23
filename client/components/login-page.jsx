import React from 'react';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'Select User' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (

      <div className="login">
        <div className="container">

          <div className="row justify-content-center">
            <img src="images/plane.png" alt="paper airplane logo" className ="contain"/>
          </div>

          <div className="row justify-content-center">
            <h1>Travel Fever</h1>
          </div>

          <div className="row justify-content-center">

            <form className="col-9 mt-2" onSubmit={this.handleSubmit}>
              <select className="custom-select custom-select-sm" value={this.state.value} onChange={this.handleChange}>
                <option value="select-user">Select User</option>
                <option value="green-power-ranger">Green Power Ranger</option>
                <option value="cody">Cody</option>
              </select>
              <button className="btn btn-light btn-block btn-sm mt-3">Log In</button>

            </form>

          </div>

        </div>
      </div>

    );
  }

}

export default LoginPage;

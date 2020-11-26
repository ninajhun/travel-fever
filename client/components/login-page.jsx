import React from 'react';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      value: 'select-user',
      isModalOpen: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    if (this.state.value !== 'select-user') {
      this.props.getUser(this.state.value);
      this.props.setView('home', {});
      this.props.getInbox(this.state.value);
    }
    event.preventDefault();
  }

  componentDidMount() {
    fetch('/api/users')
      .then(response => response.json())
      .then(data => {
        this.setState({
          users: data
        });
      })
      .catch(err => console.error(err));
  }

  render() {

    const modal = (
      <div className="card login-card">
        <div className="card-body text-center">
          <p>Travel Fever is best viewed on a mobile device for the best experience.</p>
        </div>
      </div>
    );

    return (

      <div>
        {modal}

        <div className="login">
          <div className="container">

            <div className="row justify-content-center">
              <img src="images/plane.png" alt="paper airplane logo" className="contain" />
            </div>

            <div className="row justify-content-center">
              <h1>Travel Fever</h1>
            </div>

            <div className="row justify-content-center">
              <form className="col-9 mt-2" onSubmit={this.handleSubmit}>
                <select className="custom-select custom-select-sm" value={this.state.value} onChange={this.handleChange}>
                  <option value="select-user">Select User</option>
                  {
                    this.state.users.map(user => {
                      return <option key={user.userId} value={user.userId}> {user.username} </option>;
                    })
                  }
                </select>
                <button className="btn btn-light btn-block btn-sm mt-3" type="submit">Log In</button>
              </form>
            </div>

          </div>
        </div>

      </div>

    );
  }

}

export default LoginPage;

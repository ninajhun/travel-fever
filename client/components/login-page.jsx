import React from 'react';

class LoginPage extends React.Component {

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
            <form className="col-10 mt-2">
              <select className="custom-select custom-select-sm">
                <option selected>Select User</option>
              </select>

            </form>
          </div>

        </div>
      </div>

    );
  }

}

export default LoginPage;

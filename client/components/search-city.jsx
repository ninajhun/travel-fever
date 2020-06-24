import React from 'react';

class SearchCity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: []
    };
  }

  getLocations() {
    fetch('/api/locations')
      .then(response => response.json())
      .then(data => this.setState({
        locations: data
      }));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <form className="col-9 mt-2 ml-auto mr-auto">
            <select className="custom-select custom-select-sm">
              <option value="select-user">Select Location</option>
            </select>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchCity;

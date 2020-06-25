import React from 'react';

class SearchCity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: []
    };
    this.getLocations = this.getLocations.bind(this);
  }

  getLocations() {
    fetch('/api/locations')
      .then(response => response.json())
      .then(data => this.setState({
        locations: data
      }));
  }

  componentDidMount() {
    this.getLocations();
  }

  render() {
    return (
      <div className="container">
        <div className="row search">
          <form className="col-9 mt-4 ml-auto mr-auto">
            <select className="custom-select custom-select-sm">
              <option value="select-user">Select Location</option>
              {
                this.state.locations.map(data => {
                  return (
                    <option key={ data.locationId } >{ data.name }</option>
                  );
                })
              }
            </select>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchCity;

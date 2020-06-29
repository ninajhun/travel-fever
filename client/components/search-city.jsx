import React from 'react';

class SearchCity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [],
      value: 'select-location'
    };
    this.getLocations = this.getLocations.bind(this);
    this.handleChange = this.handleChange.bind(this);
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

  handleChange(event) {
    event.preventDefault();
    this.setState({ value: event.target.value });
    this.props.getLocationId(event.target.value);
  }

  render() {
    return (
      <div className="container pr-0 pl-0">
        <div>
          <div className="col-12 mt-4 pr-0 pl-0">
            <select className="custom-select custom-select-sm" onChange={this.handleChange} value={this.state.value} name={this.props.name}>
              <option value="select-location">Select Location</option>
              {
                this.state.locations.map(data => {
                  return (
                    <option key={ data.locationId } value={data.locationId}>{ data.name }</option>
                  );
                })
              }
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchCity;

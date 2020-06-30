import React from 'react';

class SearchCity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: []
    };
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
    this.props.onChange(event.target.value);

  }

  render() {
    return (
      <div className="container pr-0 pl-0">
        <div>
          <div className="col-12 mt-4 pr-0 pl-0">
            <select className="custom-select custom-select-sm" onChange={this.handleChange} value={this.props.value} name={this.props.name}>
              <option value=''>Select Location</option>
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

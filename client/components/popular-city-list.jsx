import React from 'react';
import PopularCityListing from './popular-city-listing';

class PopularCityList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: []
    };
    this.getLocations = this.getLocations.bind(this);
  }

  componentDidMount() {
    this.getLocations();
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
      <div className="row justify-content-center">
        {
          this.state.locations.map(location => {
            return <PopularCityListing key={location.locationId} imageUrl={location.imageUrl} locationId={location.locationId} name={location.name} />;
          })
        }
      </div>

    );
  }
}

export default PopularCityList;

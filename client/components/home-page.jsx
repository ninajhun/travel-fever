import React from 'react';
import SearchCity from './search-city';
import PopularCityListing from './popular-city-listing';

class HomePage extends React.Component {

  render() {

    return (
      <div>
        <SearchCity />

        <div className="row justify-content-center">
          <PopularCityListing /> <PopularCityListing />
        </div>
      </div>
    );

  }
}

export default HomePage;

import React from 'react';
import SearchCity from './search-city';
import PopularCityListing from './popular-city-listing';

class HomePage extends React.Component {

  render() {

    return (
      <div>
        <SearchCity />
        <PopularCityListing />
      </div>
    );

  }
}

export default HomePage;

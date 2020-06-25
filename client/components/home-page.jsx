import React from 'react';
import SearchCity from './search-city';
import PopularCityList from './popular-city-list';

class HomePage extends React.Component {

  render() {
    return (
      <div>
        <SearchCity />
        <PopularCityList/>
      </div>
    );

  }
}

export default HomePage;

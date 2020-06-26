import React from 'react';
import SearchCity from './search-city';
import PopularCityList from './popular-city-list';
import Button from './button';

class HomePage extends React.Component {

  render() {
    return (
      <div>
        <div>
          <SearchCity />
        </div>
        <div className="d-flex justify-content-center m-2">
          <div className="mr-3">
            <Button text="My Listings"/>
          </div>
          <div className="ml-3">
            <Button text="Create Listing"/>
          </div>
        </div>
        <PopularCityList/>
      </div>
    );

  }
}

export default HomePage;

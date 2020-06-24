import React from 'react';
import SearchCity from './search-city';
import PopularCityList from './popular-city-list';

class HomePage extends React.Component {

  render() {
    return (
      <div>
        <SearchCity />
        {/* <div className="row justify-content-center"> */}
        <PopularCityList/>

        {/* </div> */}
      </div>
    );

  }
}

export default HomePage;

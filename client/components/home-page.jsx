import React from 'react';
import SearchCity from './search-city';
import PopularCityList from './popular-city-list';

class HomePage extends React.Component {

  render() {
    return (
      <div>
        <div className="m-4">
          <SearchCity />
        </div>
        <div className="d-flex justify-content-center m-2">
          <div className="mr-3">
            <button type="button" className="uni-button ml-2 mt-1 py-2 px-1" onClick={() => { this.props.setView('seller-listing-page'); }}>My Listing</button>
          </div>
          <div className="ml-3">
            <button type="button" className="uni-button ml-2 mt-1 py-2 px-1" onClick={() => { this.props.setView('create-listing'); }}>Create Listing</button>
          </div>
        </div>
        <PopularCityList/>
      </div>
    );

  }
}

export default HomePage;

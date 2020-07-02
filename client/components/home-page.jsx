import React from 'react';
import SearchCity from './search-city';
import PopularCityList from './popular-city-list';

class HomePage extends React.Component {

  render() {
    return (
      <div>
        <div className="m-4">
          <SearchCity setView={this.props.setView} getCustomerListings={this.props.getCustomerListings} />
        </div>
        <div className="d-flex justify-content-around m-2">
          <div className="">
            <button type="button" className="uni-button  mt-1 py-2 px-1" onClick={() => { this.props.setView('seller-listing-page', {}); }}>My Listings</button>
          </div>
          <div className="">
            <button type="button" className="uni-button mt-1 py-2 px-1" onClick={() => { this.props.setView('create-listing', {}); }}>Create Listing</button>
          </div>
        </div>
        <PopularCityList setView={this.props.setView} getCustomerListings = {this.props.getCustomerListings}/>

      </div>
    );

  }
}

export default HomePage;

import React from 'react';
import SearchCity from './search-city';
import PopularCityList from './popular-city-list';

function HomePage(props) {
  return (
    <div>
      <div className="m-4">
        <SearchCity setView={props.setView} getCustomerListings={props.getCustomerListings} locations={props.locations} />
      </div>
      <div className="d-flex justify-content-around m-2">
        <div className="">
          <button type="button" className="uni-button  mt-1 py-2 px-1" onClick={() => { props.setView('seller-listing-page', {}); }}>My Listings</button>
        </div>
        <div className="">
          <button type="button" className="uni-button mt-1 py-2 px-1" onClick={() => { props.setView('create-listing', {}); }}>Create Listing</button>
        </div>
      </div>
      <PopularCityList setView={props.setView} getCustomerListings = {props.getCustomerListings} locations = {props.locations}/>
    </div>
  );
}

export default HomePage;

import React from 'react';
import PopularCityListing from './popular-city-listing';

function PopularCityList(props) {
  return (
    <div className="container mt-3">
      <div className="row">
        <h5 className="ml-3">Popular Cities</h5>
      </div>

      <div className="row justify-content-center">
        {
          props.locations.map(location => {
            return <PopularCityListing key={location.locationId} imageUrl={location.imageUrl} locationId={location.locationId} name={location.name} setView={props.setView} getCustomerListings={props.getCustomerListings} />;
          })
        }
      </div>

    </div>
  );
}

export default PopularCityList;

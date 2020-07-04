import React from 'react';
import ListingCard from './listing-card';
import SearchCity from './search-city';

function ListingsPage(props) {
  if (!props.listings.length) {
    return (
      <div>
        <div className="m-4">
          <SearchCity setView={props.setView} getCustomerListings={props.getCustomerListings} locations={props.locations} />
        </div>
        <p className='m-5 text-center'> No listings for this city yet!</p>
      </div>

    );
  }

  return (
    <div>
      <div className="m-4">
        <SearchCity setView={props.setView} getCustomerListings={props.getCustomerListings} locations={props.locations} />
      </div>
      {
        props.listings.map(listing => {
          return <ListingCard
            key={listing.listingId}
            listingId={listing.listingId}
            imageUrl={listing.imageUrl}
            title={listing.title}
            price={listing.price}
            setView={props.setView}
            setListingId={props.setListingId}
            userId={props.user}
            checkFavorite={props.checkFavorite}
            toggleFavorite={props.toggleFavorite}
          />;
        })
      }
    </div>
  );

}

export default ListingsPage;

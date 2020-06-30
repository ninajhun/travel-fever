import React from 'react';
import ListingCard from './listing-card';
import SearchCity from './search-city';

class ListingsPage extends React.Component {

  render() {

    return (
      <div>
        <div className="m-4">
          <SearchCity setView={this.props.setView} getCustomerListings={this.props.getCustomerListings} />
        </div>
        {
          this.props.listings.map(listing => {
            return <ListingCard
              key={listing.listingId}
              listingId={listing.listingId}
              imageUrl={listing.imageUrl}
              title={listing.title}
              price={listing.price}
              setView={this.props.setView}
              setListingId={this.props.setListingId}
              userId={this.props.user}
            />;
          })
        }
      </div>
    );

  }

}

export default ListingsPage;

import React from 'react';
import ListingCard from './listing-card';
import SearchCity from './search-city';

class ListingsPage extends React.Component {

  render() {
    if (!this.props.listings.length) {
      return (
        <div>
          <div className="m-4">
            <SearchCity setView={this.props.setView} getCustomerListings={this.props.getCustomerListings} locations={this.props.locations} />
          </div>
          <p className='m-5 text-center'> No listings for this city yet!</p>;
        </div>

      );
    }

    return (
      <div>
        <div className="m-4">
          <SearchCity setView={this.props.setView} getCustomerListings={this.props.getCustomerListings} locations={this.props.locations} />
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
              favoriteListing={this.props.favoriteListing}
              toggleFavorite={this.props.toggleFavorite}
            />;
          })
        }
      </div>
    );

  }

}

export default ListingsPage;

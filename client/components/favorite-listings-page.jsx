import React from 'react';
import ListingCard from './listing-card';

class FavoriteListingsPage extends React.Component {

  render() {
    if (!this.props.listings.length) {
      return (
        <p className='m-5'>You haven&apos;t favorited anything yet!</p>
      );
    }
    return (
      <div>
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

export default FavoriteListingsPage;

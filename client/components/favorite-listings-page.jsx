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
        <div>
          <div>
            <div className="d-flex justify-content-center">
              <h4 className="mt-3 mx-2 pl-4">My Favorites</h4>
            </div>
            {
              this.props.listings.map(listing => {
                return <ListingCard
                  key={`${listing.listingId}a`}
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
          <div>
            <div className="d-flex justify-content-center mt-5">
              <button type="button" className="uni-button mt-1 py-2 px-1" onClick={() => { this.props.setView('listings-page'); }}>View Listing</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FavoriteListingsPage;

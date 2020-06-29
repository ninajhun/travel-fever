import React from 'react';
import ListingCard from './listing-card';

class ListingsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listing: []
    };
    this.getListing = this.getListing.bind(this);
  }

  componentDidMount() {
    this.getListing();
  }

  getListing() {
    fetch('api/listings')
      .then(res => res.json())
      .then(list => {
        this.setState({
          listing: list
        });
      });
  }

  render() {
    return (
      <div>
        {
          this.state.listing.map(listing => {
            return <ListingCard
              key={listing.listingId}
              listingId ={listing.listingId}
              imageUrl={listing.imageUrl}
              title={listing.title}
              price={listing.price}
              setView = {this.props.setView}
              getListingId={this.props.getListingId}
              userId={this.props.user}
              favoriteListings={this.props.favoriteListings}
            />;
          })
        }
      </div>
    );
  }

}

export default ListingsPage;

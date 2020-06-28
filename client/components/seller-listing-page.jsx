import React from 'react';
import ListingCard from './listing-card';

class SellerListingCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sellerListing: []
    };
    this.getSellerListing = this.getSellerListing.bind(this);
  }

  componentDidMount() {
    this.getSellerListing();
  }

  getSellerListing() {
    console.log('user', this.props.user);
    fetch('/api/sellerListing/2')
      .then(res => res.json())
      .then(listing => {
        console.log('listings', listing);
        this.setState({ sellerListing: listing });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div>
        {
          this.state.sellerListing.map(seller => {
            return <ListingCard
              key={seller.sellerId}
              sellerId={seller.sellerId}
              listingId={seller.listingId}
              imageUrl={seller.imageUrl}
              title={seller.title}
              price={seller.price}
              setView={this.props.setView}
              getListingId={this.props.getListingId}
              userId={this.props.user}
            />;
          })
        }
      </div>
    );
  }
}

export default SellerListingCard;

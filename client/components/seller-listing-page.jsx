import React from 'react';
import MyListingsCard from './seller-listing-card';

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
    fetch(`/api/sellerListing/${this.props.user}`)
      .then(res => res.json())
      .then(listing => {
        this.setState({ sellerListing: listing });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div>
        {
          this.state.sellerListing.map(seller => {
            return <MyListingsCard
              key={seller.sellerId}
              sellerId={seller.sellerId}
              listingId={seller.listingId}
              imageUrl={seller.imageUrl}
              title={seller.title}
              price={seller.price}
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

export default SellerListingCard;

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

        <div className="row">
          <h4 className="mt-3 mx-2 pl-4">My Listings</h4>
        </div>
        {
          this.state.sellerListing.map(seller => {
            return <MyListingsCard
              key={seller.listingId}
              sellerId={seller.sellerId}
              listingId={seller.listingId}
              imageUrl={seller.imageUrl}
              title={seller.title}
              price={seller.price}
              setView={this.props.setView}
              setListingId={this.props.setListingId}
            />;
          })
        }
      </div>
    );
  }
}

export default SellerListingCard;

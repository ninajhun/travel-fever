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
    if (!this.state.sellerListing.length) {
      return <p className='m-5'>You have no listings yet!</p>;
    }
    return (
      <div>
        <div>
          <div>
            <div className="d-flex justify-content-center">
              <h4 className="mt-3 mx-2 pl-4">My Listings</h4>
            </div>
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
        <div>
          <div className="d-flex justify-content-center mt-5">
            <button type="button" className="uni-button mt-1 py-2 px-1" onClick={() => { this.props.setView('create-listing'); }}>Create Listing</button>
          </div>
        </div>
      </div>
    );
  }
}

export default SellerListingCard;

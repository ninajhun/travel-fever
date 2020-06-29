import React from 'react';
import ListingDescription from './listing-description';

class SellerListingDescription extends React.Component {
  constructor(props) {
    super(props);
    this.returnMyListings = this.returnMyListings.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    fetch(`/api/listings/${this.props.listingId}`, { method: 'DELETE' })
      .then(res => res.json());
    this.props.setView('seller-listing-page');
  }

  returnMyListings() {
    this.props.setView('seller-listing-page');
  }

  render() {
    return (
      <div>
        <div>
          <ListingDescription listingId={this.props.listingId}/>
        </div>
        <div className="d-flex justify-content-around my-2">
          <div>
            <button type="button" className="uni-button mt-1 py-2 px-1" onClick={this.returnMyListings}>Confirm</button>
          </div>
          <div>
            <button type="button" className="uni-button mt-1 py-2 px-1" onClick={this.handleDelete}>Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default SellerListingDescription;

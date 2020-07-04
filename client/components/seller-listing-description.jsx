import React from 'react';
import ListingDescription from './listing-description';

class SellerListingDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: true
    };
    this.returnMyListings = this.returnMyListings.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDeleteModal() {

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

    if (this.state.isModalOpen) {
      return (
        <div>
          <div className="card delete-card">
            <div className="card-body">
              <h5 className="card-title">Are you sure you want to delete?</h5>
              <a href="#" className="btn btn-primary">Cancel</a>
              <a href="#" className="btn btn-primary">Delete</a>
            </div>
          </div>

          <div>
            <ListingDescription listingId={this.props.listingId}
              setView={this.props.setView}
            />
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

    // if (!this.state.isModalOpen) {
    return (
      <div>
        <div>
          <ListingDescription listingId={this.props.listingId}
            setView={this.props.setView}
          />
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

    // }

  }
}

export default SellerListingDescription;

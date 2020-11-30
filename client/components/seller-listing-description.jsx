import React from 'react';
import ListingDescription from './listing-description';

class SellerListingDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleDeleteModal = this.handleDeleteModal.bind(this);
  }

  handleDeleteModal() {
    if (!this.state.isModalOpen) {
      this.setState({
        isModalOpen: true
      });
    } else {
      this.setState({
        isModalOpen: false
      });
    }
  }

  handleDelete() {
    fetch(`/api/listings/${this.props.listingId}`, { method: 'DELETE' })
      .then(res => res.json());
    this.props.setView('seller-listing-page');
  }

  render() {
    let modal;
    if (!this.state.isModalOpen) {
      modal = null;
    } else {
      modal = (
        <div>
          <div className="card delete-card">
            <div className="card-body">
              <h5 className="card-title text-center">Are you sure you want to delete?</h5>
              <div className="d-flex align-items-center justify-content-center">
                <button type="button" className="uni-button mt-1 py-2 px-1 mr-1" onClick={this.handleDeleteModal}>Cancel</button>
                <button type="button" className="uni-button mt-1 py-2 px-1" onClick={this.handleDelete}>Delete</button>

              </div>

            </div>
          </div>
        </div>
      );
    }

    return (
      <div>
        {modal}

        <div>
          <ListingDescription listingId={this.props.listingId}
            setView={this.props.setView}
          />
        </div>
        <div className="d-flex justify-content-around my-2">
          <div>
            <button type="button" className="uni-button mt-1 py-2 px-1" onClick={() => this.props.setView('seller-listing-page')}>Confirm</button>
          </div>
          <div>
            <button type="button" className="uni-button mt-1 py-2 px-1" onClick={this.handleDeleteModal}>Delete</button>
          </div>
        </div>

      </div>
    );
  }

}

export default SellerListingDescription;

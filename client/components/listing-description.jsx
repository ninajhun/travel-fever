import React from 'react';

class ListingDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listing: {}
    };
  }

  getListingDetails(listingId) {
    fetch(`/api/listings/${listingId}`);
  }

  render() {
    return (
      <div className="card mt-5">
        <img className="card-img-top" src="" alt=""/>
        <div className="card-body">
          <div className="card-title d-flex align-items-center">
            <img className="listing-icon" src="" alt="" />
            <h6 className="mb-0 ml-1">Cody</h6>
          </div>
          <h5 className="card-title">Card title</h5>
          <h5 className="card-title">Location</h5>
          <p className="card-text">The text in this element is being displayed
          on the view. This text is never going to make sense to any of us. But
          thank you for taking the time out of your day for reading this.</p>
        </div>
      </div>
    );
  }
}

export default ListingDescription;

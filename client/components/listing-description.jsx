import React from 'react';

class ListingDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listing: {}
    };
  }

  getListingDetails(listingId) {
    fetch(`/api/listings/${listingId}`)
      .then(result => result.json())
      .then(data => this.setState({
        listing: data
      }))
      .catch(err => console.error(err));
  }

  componentDidMount() {
    this.getListingDetails();
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
          <h5 className="card-title">{ this.state.listing.title }</h5>
          <h5 className="card-title">Location</h5>
          <p className="card-text">{ this.state.listing.description }</p>
        </div>
      </div>
    );
  }
}

export default ListingDescription;

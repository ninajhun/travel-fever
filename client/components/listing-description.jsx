import React from 'react';

class ListingDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listing: {}
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch(`/api/listings/${this.props.listingId}`)
      .then(result => result.json())
      .then(data => this.setState({
        listing: data
      }))
      .catch(err => console.error(err));
  }

  handleClick() {
    if (this.props.currentView === 'listing-description') {
      this.props.setView('check-out');
    }
    this.props.setView('seller-listing-description');
  }

  render() {
    return (
      <div className="card">
        <img className="card-img-top" src={ this.state.listing.imageUrl } alt=""/>
        <div className="card-body">
          <div className="card-title d-flex align-items-center">
            <img className="listing-icon" src={ this.state.listing.sellerPicture } alt="" />
            <h6 className="mb-0 ml-1">{ this.state.listing.sellerName }</h6>
          </div>
          <h5 className="card-title">{ this.state.listing.title }</h5>
          <h5 className="card-title">{ this.state.listing.location }</h5>
          <p className="card-text">{ this.state.listing.description }</p>
          <div className="text-center">
            <a href="#" className="btn uni-button" onClick={this.handleClick}>{
              `Purchase $${(this.state.listing.price)}`
            }</a>
          </div>
        </div>
      </div>
    );
  }
}

export default ListingDescription;

import React from 'react';

class ListingCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myFavorites: this.props.favoriteListings
      // isFavorite: this.props.favoriteListing(this.props.listingId)
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleHeartClick = this.handleHeartClick.bind(this);
  }

  handleClick(event) {
    if (!event.target.classList.contains('fa-heart')) {
      this.props.setListingId(this.props.listingId);
      this.props.setView('listing-description');
    }
    if (this.props.userId === this.props.sellerId) {
      this.props.getListingId(this.props.listingId);
      this.props.setView('seller-listing-description');
    }
  }

  handleHeartClick() {
    this.props.toggleFavorite(this.props.listingId);
    const isFavorite = this.state.isFavorite;
    this.setState({
      isFavorite: !isFavorite
    });
  }

  render() {
    return (
      <div className='card mb-3 listing' onClick={this.handleClick}>
        <div className='row no-gutters flex-nowrap card-row'>
          <div className='col-4'>
            <img src={this.props.imageUrl} alt={this.props.imageUrl} className='card-img image-listing' />
          </div>
          <div className='col-md-8 d-flex align-items-center'>
            <div className='card-body'>
              <h5 className='card-title mt-3'>{this.props.title}</h5>
              <p className='listing-price'>${this.props.price}</p>
              <div className='fav-heart'>
                {this.state.isFavorite ? <i className="fas fa-heart" onClick={this.handleHeartClick} />
                  : <i className="far fa-heart" onClick={this.handleHeartClick} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ListingCard;

import React from 'react';

class ListingCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myFavorites: this.props.favoriteListings,
      isFavorite: this.props.favoriteListing(this.props.listingId)
    };
    this.handleClick = this.handleClick.bind(this);
    this.favoriteOnClick = this.favoriteOnClick.bind(this);
    this.toBeOrNotToBe = this.toBeOrNotToBe.bind(this);
  }

  handleClick(event) {
    if (!event.target.classList.contains('fa-heart')) {
      this.props.getListingId(this.props.listingId);
      this.props.setView('listing-description');
    }
  }

  handleHeartClick() {
    this.props.toggleFavorite(this.props.listingId);
    const { isFavorite } = this.state;
    this.setState({
      isFavorite: !isFavorite
    });
  }

  render() {
    return (
      <div className='listing' onClick={this.handleClick}>
        {/* add on click to get pass listingId */}
        <div className='card mb-3' >
          <div className='row no-gutters flex-nowrap'>
            <div className='col-md-4'>
              <img src={this.props.imageUrl} alt={this.props.imageUrl} className='card-img image-listing' />
            </div>
            <div className='col-md-8 d-flex align-items-center'>
              <div className='card-body'>
                <h5 className='card-title'>{this.props.title}</h5>
                <p className='listing-price'>${this.props.price}</p>
                <div className='fav-heart'>
                  {this.state.isFavorite ? <i className="fas fa-heart" onClick={this.favoriteOnClick} />
                    : <i className="far fa-heart" onClick={this.favoriteOnClick} />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ListingCard;

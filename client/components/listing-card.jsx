import React from 'react';

class ListingCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFavorite: this.props.checkFavorite(this.props.listingId)
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleHeartClick = this.handleHeartClick.bind(this);
  }

  handleClick(event) {
    if (!event.target.classList.contains('fa-heart')) {
      this.props.setListingId(this.props.listingId);
      this.props.setView('listing-description');
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
              <p className='card-title mt-3'>{this.props.title}</p>
              <p className='listing-price'>${this.props.price}</p>
              <div className='fav-heart'>
                {
                  this.state.isFavorite ? <i className="fas fa-heart" onClick={this.handleHeartClick} />
                    : <i className="far fa-heart" onClick={this.handleHeartClick} />
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ListingCard;

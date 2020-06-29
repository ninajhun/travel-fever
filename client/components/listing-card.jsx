import React from 'react';

class ListingCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.favoriteOnClick = this.favoriteOnClick.bind(this);
  }

  handleClick(event) {
    if (!event.target.classList.contains('fa-heart')) {
      this.props.getListingId(this.props.listingId);
      this.props.setView('listing-description');
    }
  }

  favoriteOnClick() {
    if (!this.state.favorite) {
      const req = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: this.props.userId,
          listingId: this.props.listingId
        })
      };
      fetch('/api/favorites', req)
        .then(result => result.json())
        .then(this.setState({
          favorite: true
        }))
        .catch(err => console.error(err));
    } else {
      const req = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: this.props.userId,
          listingId: this.props.listingId
        })
      };
      fetch('/api/favorites', req)
        .then(result => result.json())
        .then(this.setState({
          favorite: false
        }))
        .catch(err => console.error(err));
    }
  }

  render() {
    return (
      <div className='card mb-3 listing' onClick={this.handleClick}>
        <div className='row no-gutters flex-nowrap card-row'>
          <div className='col-4'>
            <img src={this.props.imageUrl} alt={this.props.imageUrl} className='card-img image-listing' />
          </div>
          <div className='col-8 d-flex align-items-center'>
            <div className='card-body'>
              <p className='card-title'>{this.props.title}</p>
              <p className='listing-price'>${this.props.price}</p>
              <div className='fav-heart'>
                {this.state.favorite ? <i className="fas fa-heart" onClick={this.favoriteOnClick} />
                  : <i className="far fa-heart" onClick={this.favoriteOnClick} />}
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}
export default ListingCard;

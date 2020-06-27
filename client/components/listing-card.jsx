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
        header: "Content-Type': 'application/json",
        body: {
          userId: this.props.user,
          listingId: this.props.listingId
        }
      };
      fetch('/api/favorites', req);
    }
    this.state.favorite ? this.setState({ favorite: false })
      : this.setState({ favorite: true });
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
                  {this.state.favorite ? <i className="fas fa-heart" onClick={this.favoriteOnClick} />
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

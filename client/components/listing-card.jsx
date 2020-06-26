import React from 'react';

class ListingCard extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.getListingId(this.props.listingId);
    this.props.setView('listing-description');
  }

  render() {
    return (
      <div className='listing' >
        {/* add on click to get pass listingId */}
        <div className='card mb-3' onClick={this.handleClick}>
          <div className='row no-gutters flex-nowrap'>
            <div className='col-md-4'>
              <img src={this.props.imageUrl} alt={this.props.imageUrl} className='card-img image-listing' />
            </div>
            <div className='col-md-8 d-flex align-items-center'>
              <div className='card-body'>
                <h5 className='card-title'>{this.props.title}</h5>
                <p className='listing-price'>${this.props.price}</p>
                {/* <div className='fav-heart'>
                  <i className="far fa-heart"></i>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ListingCard;

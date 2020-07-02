import React from 'react';

class MyListingsCard extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.setListingId(this.props.listingId);
    this.props.setView('seller-listing-description');
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyListingsCard;

import React from 'react';

class MyListingsCard extends React.Component {

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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyListingsCard;

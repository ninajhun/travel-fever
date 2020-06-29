import React from 'react';

class CheckoutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listing: {}
    };
  }

  componentDidMount() {
    fetch(`/api/listings/${this.props.listingId}`)
      .then(result => result.json())
      .then(data => this.setState({
        listing: data
      }))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className='listing'>
        <div className='card mb-3' >
          <div className='row no-gutters flex-nowrap'>
            <div className='col-md-4'>
              <img src={this.state.listing.imageUrl} alt={this.state.listing.imageUrl} className='card-img image-listing' />
            </div>
            <div className='col-md-8 d-flex align-items-center'>
              <div className='card-body'>
                <h5 className='card-title'>{this.state.listing.title}</h5>
                <p className='listing-price'>${this.state.listing.price}</p>
                <div className='fav-heart'>
                  <i className="fas fa-heart" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default CheckoutPage;

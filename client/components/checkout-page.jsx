import React from 'react';

class CheckoutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listing: {},
      user: {}
    };
  }

  componentDidMount() {
    fetch(`/api/listings/${this.props.listingId}`)
      .then(result => result.json())
      .then(data => this.setState({
        listing: data
      }))
      .catch(err => console.error(err));

    fetch(`api/users/${this.props.user}`)
      .then(result => result.json())
      .then(data => {
        this.setState({
          user: data.user
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="">

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

        <h5 className="text-center">Payment Information</h5>

        <form className="col-12">
          <div className="form-group">
            <h6>Name</h6>
            <input type="text" className="col-12 form-control" placeholder={this.state.user.username}></input>
          </div>

          <div className="form-group">
            <h6>Card Numbers</h6>
            <input type="text" className="col-12 form-control" placeholder="123 456 7890"></input>
          </div>

          <div className="form-group">
            <h6>Name</h6>
            <input type="text" className="col-12 form-control" placeholder="04/20"></input>
          </div>

          <div className="form-group">
            <h6>Name</h6>
            <input type="text" className="col-12 form-control" placeholder="12345"></input>
          </div>

        </form>

      </div>

    );
  }

}

export default CheckoutPage;

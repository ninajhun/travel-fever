import React from 'react';

class CheckoutPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listing: {},
      user: {},
      purchaseComplete: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit() {
    const purchaseInfo = {
      userId: this.state.user.userId,
      listingId: this.state.listing.listingId
    };
    fetch('/api/purchases', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(purchaseInfo)
    })
      .catch(err => console.error(err));
    this.setState({
      purchaseComplete: true
    });
    this.props.getInbox(this.props.user);
  }

  render() {
    if (!this.state.purchaseComplete) {
      return (
        <div className="container">
          <div className="row justify-content-center">
            <div className='card mb-3 listing' onClick={this.handleClick}>
              <div className='row no-gutters flex-nowrap card-row'>
                <div className='col-4'>
                  <img src={this.state.listing.imageUrl} alt={this.state.listing.imageUrl} className='card-img image-listing' />
                </div>
                <div className='col-8 d-flex align-items-center'>
                  <div className='card-body'>
                    <p className='card-title mt-3'>{this.state.listing.title}</p>
                    <p className='listing-price'>${this.state.listing.price}</p>
                    <div className='fav-heart'>
                      <i className="fas fa-heart"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
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
            <div className="justify-content-center">
              <button type="button" className="uni-button mb-4 mt-1 py-2 px-1" onClick={this.handleSubmit} >Confirm</button>
            </div>
          </div>
        </div>
      );

    } else {
      return (
        <div className="container">
          <div className="row justify-content-center mt-5">
            <h4 className="text-center mt-5">Thank you for choosing to connect with {this.state.listing.sellerName}! </h4>
            <p className="text-center my-2">Please continue your purchase by discussing with {this.state.listing.sellerName} in the messages inbox.</p>
            <button type="submit"
              className="uni-button mt-2 mt-1 py-2 px-1"
              onClick = {() => {
                this.props.setView('inbox', {});
                this.props.getInbox(this.props.user);
              }
              }>Go to Inbox</button>
          </div>
        </div>
      );
    }
  }
}

export default CheckoutPage;

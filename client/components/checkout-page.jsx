import React from 'react';
import ListingCard from './listing-card';

class CheckoutPage extends React.Component {
  // constructor(props) {
  //   super(props);

  // }

  // getPurchaseListing(){
  //   fetch
  // }

  render() {
    return (
      <ListingCard listingId={this.props.listingId} />
    );
  }
}

export default CheckoutPage;

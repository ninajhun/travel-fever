import React from 'react';
import ListingCard from './listing-card';
import SearchCity from './search-city';

class ListingsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listing: []
    };
    this.getListing = this.getListing.bind(this);
    this.filterListingLocation = this.filterListingLocation.bind(this);
  }

  componentDidMount() {
    this.getListing();
  }

  getListing() {
    fetch('api/listings')
      .then(res => res.json())
      .then(list => {
        this.setState({
          listing: list
        });
      });
  }

  filterListingLocation() {
    fetch(`/api/listingsLocations/${this.props.locationId}`)
      .then(res => res.json())
      .then(list => {
        this.setState({
          listing: list
        });
      });
  }

  render() {
    return (
      <div>
        <div className="m-4">
          <SearchCity getLocationId={this.props.getLocationId} filterListingLocation={this.filterListingLocation} />
        </div>
        {
          this.state.listing.map(listing => {
            return <ListingCard
              key={listing.listingId}
              listingId ={listing.listingId}
              imageUrl={listing.imageUrl}
              title={listing.title}
              price={listing.price}
              setView = {this.props.setView}
              getListingId={this.props.getListingId}
              userId={this.props.user}
            />;
          })
        }
      </div>
    );
  }

}

export default ListingsPage;

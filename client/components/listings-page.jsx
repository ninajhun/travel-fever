import React from 'react';
import ListingCard from './listing-card';
import SearchCity from './search-city';

class ListingsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listing: [],
      locationId: this.props.locationId
    };
    this.getListing = this.getListing.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
  }

  componentDidMount() {
    if (this.state.locationId !== null) {
      this.filterListingLocation();
    } else if (this.props.view === 'listings-page') {
      this.getListing();
    }
  }

  // componentDidUpdate(prevProps) {
  //   if (this.state.locationId !== prevProps.locationId) {
  //     this.setState({ locationId: this.props.locationId });
  //   }
  // }

  // componentWillUnmount() {
  //   this.setState({
  //     listing: []
  //   });
  // }

  getListing() {
    fetch('api/listings')
      .then(res => res.json())
      .then(list => {
        this.setState({
          listing: list
        });
      });
  }

  handleLocationChange(locationId) {
    console.log(locationId);
    if (locationId !== '') {
      fetch(`/api/listingsLocations/${locationId}`)
        .then(res => res.json())
        .then(list => {
          this.setState({
            listing: list
          });
        });
    }

  }

  render() {
    return (
      <div>
        <div className="m-4">
          <SearchCity onChange ={this.handleLocationChange} />
        </div>
        {
          this.state.listing.map(listing => {
            return <ListingCard
              key={listing.listingId}
              listingId={listing.listingId}
              imageUrl={listing.imageUrl}
              title={listing.title}
              price={listing.price}
              setView={this.props.setView}
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

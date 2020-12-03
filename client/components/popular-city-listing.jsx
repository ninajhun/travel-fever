import React from 'react';

class PopularCityListing extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.setView('listings-page', { locationId: this.props.locationId });
    this.props.getCustomerListings(this.props.locationId);
  }

  render() {
    return (
      <div className="col-6 mb-3">
        <div className="card text-center popular-city" onClick={this.handleClick}>
          <img src={this.props.imageUrl} className="card-img-top contain" alt="..." />
          <h6 className="card-title  pt-3 pb-2 mb-2">{this.props.name}</h6>
        </div>
      </div>

    );
  }

}

export default PopularCityListing;

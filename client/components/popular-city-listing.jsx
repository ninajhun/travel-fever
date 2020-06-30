import React from 'react';

class PopularCityListing extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // this.props.getLocationId(this.props.locationId);
    this.props.setView('listings-page', this.props.locationId);
  }

  render() {
    return (
      <div className="col-6 mb-3 ">
        <div className="card text-center" onClick={this.handleClick}>
          <img src={this.props.imageUrl} className="card-img-top contain" alt="..." />
          <h6 className="card-title popular-city pt-3 pb-2 mb-2">{this.props.name}</h6>
        </div>
      </div>

    );
  }

}

export default PopularCityListing;

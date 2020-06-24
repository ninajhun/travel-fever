import React from 'react';

class PopularCityListing extends React.Component {

  render() {
    return (

      <div className="col-6 mb-3 ">
        <div className="card text-center">
          <img src={this.props.imageUrl} className="card-img-top contain" alt="..." />
          <h6 className="card-title popular-city py-2">{this.props.name}</h6>
        </div>
      </div>

    );
  }

}

export default PopularCityListing;

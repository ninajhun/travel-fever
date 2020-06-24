import React from 'react';

class PopularCityListing extends React.Component {

  render() {
    return (

      <div className="col-5 my-3 ">
        <div className="card text-center">
          <img src={this.props.imageUrl} className="card-img-top contain" alt="..." />
          <h5 className="card-title popular-city small pt-2">{this.props.name}</h5>
        </div>
      </div>

    );
  }

}

export default PopularCityListing;

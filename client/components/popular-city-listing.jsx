import React from 'react';

class PopularCityListing extends React.Component {

  render() {
    return (

      <div>
        <div className="col-5 m-2">
          <div className="card text-center">
            <img src="/images/madrid.jpg" className="card-img-top" alt="..." />
            <p className="card-title popular-city small pt-2">Madrid, Spain</p>
          </div>
        </div>

      </div>

    );
  }

}

export default PopularCityListing;

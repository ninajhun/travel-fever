import React from 'react';

class ListingDescription extends React.Component {

  render() {
    return (
      <div className="card mt-5">
        <img className="card-img-top" src="" alt=""/>
        <div className="d-flex align-items-center">
          <img src={ this.props.profileImg } alt="" className="icon"/>
          <h6>Cody</h6>
        </div>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">The text in this element is being displayed
          on the view. This text is never going to make sense to any of us. But
          thank you for taking the time out of your day for reading this.</p>
        </div>
      </div>
    );
  }
}

export default ListingDescription;

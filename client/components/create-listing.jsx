import React from 'react';
import SearchCity from './search-city';
// import Button from './button';

class CreateListing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: '',
      price: '',
      title: '',
      description: '',
      locationId: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.getLocationId = this.getLocationId.bind(this);
    this.postListing = this.postListing.bind(this);
  }

  postListing() {
    fetch('/api/listings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        path: this.state.imageUrl,
        price: this.state.price,
        title: this.state.title,
        description: this.state.description,
        locationId: this.state.locationId,
        sellerId: this.props.user
      })
    })
      .then(res => res.json())
      .then(data =>
        console.log('data', data)
      )
      .catch(err => console.error(err));
  }

  handleChange(event) {
    const target = event.target.name;
    switch (target) {
      case 'title':
        this.setState({ title: event.target.value });
        break;
      case 'price':
        this.setState({ price: event.target.value });
        break;
      case 'description':
        this.setState({ description: event.target.value });
        break;
      case 'image':
        this.setState({ imageUrl: event.target.value });
        console.log('imageUrl', { imageUrl: event.target.value });
        break;
      default:
        break;
    }
  }

  getLocationId(locationId) {
    this.setState({ locationId });
  }

  handleSubmit() {
    event.preventDefault();
  }

  handleReset() {
    this.setState({
      imageUrl: '',
      price: '',
      title: '',
      description: '',
      locationId: ''
    });
  }

  render() {
    return (
      <div>
        <form encType="multipart/form-data" className="col-12 mt-5 pt-4 ml-auto mr-auto">
          <h4>Create Listing</h4>
          <div className="form-group">
            <SearchCity getLocationId={this.getLocationId}/>
          </div>
          <div className="form-group">
            <input required className="form-control" type="text" name="title" id="title" placeholder="Listing Title" title={this.state.title} onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <div className="form-row">
              <div className="col-12">
                <input required className="form-control" type="number" name="price" id="price" placeholder="Price" price={this.state.price} onChange={this.handleChange}/>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label>
              <h4>Upload Image<i className="fas fa-cloud-upload-alt"></i></h4>
              <div className="form-group">
                <input type="file" name="image" id="imageUrl" accept="image/png, image/jpeg" className="form-control-file" image={this.state.imageUrl} onChange={this.handleChange}/>
              </div>
            </label>
          </div>
          <div className="form-group mb-0 pb-0">
            <label><h4>Description</h4>
              <textarea name="description" id="description" cols="41" rows="5" description={this.state.description} onChange={this.handleChange}></textarea>
            </label>
          </div>
          <div className="d-flex justify-content-end mb-3">
            <button type="reset" className="btn btn-light">Clear Form</button>
          </div>
          <div className='d-flex justify-content-center' >
            <button type="button" className="uni-button ml-2 mt-1 py-2 px-1" onClick={this.postListing}>Preview Listing</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateListing;

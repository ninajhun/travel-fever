import React from 'react';
import SearchCity from './search-city';

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
        break;
      default:
        break;
    }
  }

  getLocationId(locationId) {
    this.setState({ locationId });
  }

  handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    fetch('/api/listings', {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(data =>
        this.setState({
          imageUrl: '',
          price: '',
          title: '',
          description: '',
          locationId: ''
        },
        () => this.props.setView('seller-listing-page'))
      )
      .catch(err => console.error(err));
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
        <form encType="multipart/form-data" className="col-12 pt-4 " onSubmit={this.handleSubmit} onReset={this.handleReset}>
          <h4>Create Listing</h4>
          <input type="hidden" name="sellerId" defaultValue={this.props.user}/>
          <div className="form-group">
            <SearchCity getLocationId={this.getLocationId} name="locationId"/>
          </div>
          <div className="form-group">
            <input required className="form-control" type="text" name="title" id="title" maxLength="50" placeholder="Listing Title" value={this.state.title} onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <div className="form-row">
              <div className="col-12">
                <input required className="form-control" type="number" name="price" id="price" placeholder="Price" value={this.state.price} onChange={this.handleChange}/>
              </div>
            </div>
          </div>
          <div>
            <div className='d-flex align-items-baseline'>
              <h4>Upload Image</h4><i className="fas fa-cloud-upload-alt ml-1"></i>
            </div>
            <label>
              <div className="form-group">
                <input type="file" name="image" id="imageUrl" accept="image/png, image/jpeg" className="form-control-file" value={this.state.imageUrl} onChange={this.handleChange}/>
              </div>
            </label>
          </div>
          <div className="form-group mb-0 pb-0">
            <label><h4>Description</h4>
              <textarea name="description" id="description" cols="37" rows="5" value={this.state.description} onChange={this.handleChange}></textarea>
            </label>
          </div>
          <div className="d-flex justify-content-end mb-3">
            <button type="reset" className="btn btn-light">Clear Form</button>
          </div>
          <div className='d-flex justify-content-center' >
            <button type="submit" className="uni-button mb-4 mt-1 py-2 px-1">Preview Listing</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateListing;

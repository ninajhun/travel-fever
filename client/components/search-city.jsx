import React from 'react';

class SearchCity extends React.Component {
  constructor(props) {
    super(props);
    this.state = [];
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <form className="col-9 mt-2 ml-auto mr-auto">
            <select className="custom-select custom-select-sm">
              <option value="select-user">Select Location</option>
            </select>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchCity;

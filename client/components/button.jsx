import React from 'react';

class Button extends React.Component {

  render() {
    return (
      <div>
        <button type="button" className="uni-button ml-2 mt-1 py-2 px-1">{
          this.props.text
        }</button>
      </div>
    );
  }
}

export default Button;

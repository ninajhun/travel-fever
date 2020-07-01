import React from 'react';

class Messages extends React.Component {

  render() {
    return (

      <div className="container-fluid">
        <div className="row recipient">
          <div className="col-1">
            <img src="/images/timd.png" />
          </div>
          <div className="col-9">
            <p>Hello this is a test!</p>
          </div>
        </div>
        <div className="row sender"></div>

        <form action="">
          <textarea name="" id="" cols="37" rows="1" ></textarea>
          <button>submit</button>
        </form>

      </div>

    );
  }
}

export default Messages;

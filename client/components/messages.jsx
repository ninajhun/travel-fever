import React from 'react';
import RecipientMessage from './recipient-message';
import SenderMessage from './sender-message';

class Messages extends React.Component {

  render() {
    return (
      <div>

        <RecipientMessage />
        <SenderMessage />

        <form>
          <div className="input-group col-12">
            <input type="text" name="" id="" className="form-control" ></input>
            <div className="input-group-append" onClick={() => console.log('hi')}>
              <div className="input-group-text"><i className="fas fa-arrow-up"></i></div>
            </div>
          </div>

        </form>

      </div>

    );
  }
}

export default Messages;

// if else userId = senderId render recipient message

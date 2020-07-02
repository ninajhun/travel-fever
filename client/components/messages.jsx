import React from 'react';
import RecipientMessage from './recipient-message';
import SenderMessage from './sender-message';

class Messages extends React.Component {
  handleOnClick() {
    // this.props.sendDm(chatId, senderId, recipientId, content);
  }

  render() {
    return (
      <div className="container-flex">

        <RecipientMessage />
        <SenderMessage />
        <RecipientMessage />
        <SenderMessage />
        <RecipientMessage />
        <SenderMessage />
        <RecipientMessage />

        <div className="row">
          <div className="col-12 input-group message-input fixed-bottom">
            <input type="text" name="" id="" className="form-control" ></input>
            <div className="input-group-append" onClick={() => this.handleOnClick}>
              <div className="input-group-text"><i className="fas fa-arrow-up"></i></div>
            </div>
          </div>

        </div>

      </div>

    );
  }
}

export default Messages;

// if else userId = senderId render recipient message

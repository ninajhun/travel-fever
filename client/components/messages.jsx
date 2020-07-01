import React from 'react';
import RecipientMessage from './recipient-message';
import SenderMessage from './sender-message';

class Messages extends React.Component {

  render() {
    return (
      <div>

        <RecipientMessage />
        <SenderMessage />

        <form action="">
          <textarea name="" id="" cols="37" rows="1" ></textarea>
          <button>submit</button>
        </form>

      </div>

    );
  }
}

export default Messages;

// if else userId = senderId render recipient message

import React from 'react';

function inboxCard(props) {

  return (
    <div>
      <div className='row p-2' onClick={() => { props.setView('messages', { recipientImg: props.imageUrl, recipientId: props.recipientId, chatId: props.chatId }); props.getMessages(props.chatId); }}>

        <div className='col-2 d-flex align-content-center justify-content-center'>
          <img src={props.imageUrl} alt={props.imageUrl} className='inbox-icon' />
        </div>

        <div className='col-10'>
          <div>
            <p className='mt-3'>Connect with {props.username}!</p>
          </div>
        </div>

      </div>
      <div className="d-flex justify-content-center">
        <div className="inbox-border"></div>
      </div>

    </div>
  );
}

export default inboxCard;

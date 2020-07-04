import React from 'react';
import InboxCard from './inbox-card';

function UserInbox(props) {
  if (!props.inbox.length) {
    return <p className='m-5 text-center'> Buy a seller&apos;s listing to get connected with them!</p>;
  } else {
    return (
      <div>
        {
          props.inbox.map(inboxChat => {
            return (
              <InboxCard
                key={inboxChat.chatId}
                chatId={inboxChat.chatId}
                username={inboxChat.username}
                imageUrl={inboxChat.imageUrl}
                setView={props.setView}
                getMessages={props.getMessages}
                recipientId={inboxChat.otherUserId}
              />
            );
          })
        }
      </div>
    );
  }
}

export default UserInbox;

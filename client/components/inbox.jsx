import React from 'react';
import InboxCard from './inbox-card';

function UserInbox(props) {
  if (!props.inbox.length) {
    return <p className='m-5 text-center'> Buy a seller&apos;s listing to get connected with them!</p>;
  } else {
    return (
      <div>

        <div className="container-fluid">
          <div className="d-flex justify-content-center align-items-center">
            <h4 className="mt-3 mx-2">Inbox</h4>
          </div>

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

        </div>

      </div>
    );
  }
}

export default UserInbox;

import React from 'react';
import InboxCard from './inbox-card';

class UserInbox extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.inbox.map(inboxChat => {
            return (
              <InboxCard
                key={inboxChat.chatId}
                chatId = {inboxChat.chatId}
                username={inboxChat.username}
                recipientId={inboxChat.otherUserId}
                imageUrl={inboxChat.imageUrl}
                setView ={this.props.setView}
                getMessages={this.props.getMessages}
              />
            );
          })
        }
      </div>
    );
  }
}

export default UserInbox;

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
                username={inboxChat.username}
                imageUrl={inboxChat.imageUrl}
              />
            );
          })
        }
      </div>
    );
  }
}

export default UserInbox;

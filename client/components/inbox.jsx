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
                setView ={this.props.setView}
                sendDm={this.props.sendDm}
              />
            );
          })
        }
      </div>
    );
  }
}

export default UserInbox;

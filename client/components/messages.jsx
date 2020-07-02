import React from 'react';
import RecipientMessage from './recipient-message';
import SenderMessage from './sender-message';

class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chatId: this.props.chatId,
      senderId: this.props.user.userId,
      recipientId: this.props.recipientId,
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.sendDm(this.state.chatId, this.state.senderId, this.state.recipientId, this.state.value);
    this.setState({
      value: ''
    });
  }

  render() {
    return (
      <div className="container-flex">
        {
          this.props.messages.map(message => {
            if (this.props.user.userId !== message.recipientId) {
              return <SenderMessage key={message.messageId} content={message.content} imageUrl={this.props.user.imageUrl}/>;
            } else {
              return <RecipientMessage key={message.messageId} content={message.content} imageUrl={this.props.recipientImg} />;
            }

          })

        }

        <div className="row">
          <form onSubmit={this.handleSubmit}>
            <div className="col-12 input-group message-input fixed-bottom">
              <input type="text" value={this.state.value}
                onChange={this.handleChange}
                className="form-control" />
              <div className="input-group-append" type="submit">
                <div className="input-group-text">
                  <button type="submit">
                    <i className="fas fa-arrow-up"></i>
                  </button>
                </div>
              </div>
            </div>
          </form>

        </div>

      </div>

    );
  }
}

export default Messages;

// if else userId = senderId render recipient message

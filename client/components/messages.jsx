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
      value: '',
      interval: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.pollForMessages();
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  pollForMessages() {
    const intervalId = setInterval(() => {
      this.props.getMessages(this.state.chatId);
    }, 1000);
    this.setState({ interval: intervalId });
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
            <div className="col-12 input-group message-input fixed-bottom send-messages">
              <input type="text" value={this.state.value}
                onChange={this.handleChange}
                className="form-control" />
              <div className="input-group-append send-button" type="submit">
                <div className="input-group-text">
                  <button type="submit" className="message-button">
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

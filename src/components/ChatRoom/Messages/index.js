import React, { Component } from 'react';
import Message from './Message';

class Messages extends Component {
  componentDidUpdate() {
    //scroll after new message is added
    const messageHistory = document.getElementById('messageHistory');
    messageHistory.scrollTop = messageHistory.scrollHeight;
  }

  render() {
    return (
      <div id="messageHistory">
        { this.props.messageData.map((message) =>
          <Message
            key={message.id}
            username={message.username}
            message={message.message}
            fromMe={message.fromMe} />
        )}
      </div>
    );
  }
}

export default Messages;
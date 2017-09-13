import React, { Component } from 'react';
import Message from './Message';

class Messages extends Component {
  render() {
    return (
      <div>
        { this.props.messageData.map((message) =>
          <Message
            key={message.id}
            username={message.username}
            message={message.message}
            fromMe={message.fromMe} 
            avatar={message.avatar}/>
        )}
      </div>
    );
  }
}

export default Messages;
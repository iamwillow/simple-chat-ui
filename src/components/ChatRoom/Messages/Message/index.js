import React, { Component } from 'react';

class Message extends Component {
  render(props) {
    const fromMe = this.props.fromMe ? 'from-me' : '';

    return (
      <div className={`message ${fromMe}`}>
        <div className="username">
          { this.props.username }
        </div>
        <div className="message-body">
          { this.props.message }
        </div>
      </div>
    );
  }
}

export default Message;
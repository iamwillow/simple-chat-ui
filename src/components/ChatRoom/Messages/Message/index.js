import React, { Component } from 'react';

class Message extends Component {
  render(props) {
    const fromMe = this.props.fromMe ? 'from-me' : '';

    return (
      <div className={`message ${fromMe}`}>
        <img
          className="avatar"
          src={require('../../../../assets/img/' + this.props.avatar )}
          alt="avatar image" />
        <div className="not-avatar">
          <div className="flex-wrap">
            <div className="username">
              { this.props.username }
            </div>
            <div className="time-stamp">
              6:15 PM
            </div>
          </div>
          <div className="message-body">
            { this.props.message }
          </div>
        </div>
      </div>
    );
  }
}

export default Message;
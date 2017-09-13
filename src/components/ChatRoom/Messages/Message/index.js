import React from 'react';

const Message = (props) => {
  return (
    <div className={`message ${props.fromMe}`}>
      <img
        className="avatar"
        src={require('../../../../assets/img/' + props.avatar )}
        alt="avatar" />
      <div className="not-avatar">
        <div className="flex-wrap">
          <div className="username">
            { props.username }
          </div>
          <div className="time-stamp">
            6:15 PM
          </div>
        </div>
        <div className="message-body">
          { props.message }
        </div>
      </div>
    </div>
  );
}

export default Message;
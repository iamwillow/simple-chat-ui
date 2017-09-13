import React from 'react';
import Message from './Message';

const Messages = (props) => {
  return (
    <div>
      { props.messageData.map((message) =>
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

export default Messages;
import React, { Component } from 'react';
import uniqueId from 'lodash/uniqueId';
import Messages from './Messages';
import fakeChatData from '../../assets/data/fakeChatData.json';

class ChatRoom extends Component {
  constructor(props) {
    super(props);
    this.state = this.getDefaultState();

    this.submitHandler = this.submitHandler.bind(this);
    this.messageChangeHandler = this.messageChangeHandler.bind(this);
  }

  getDefaultState = () => {
    return {
      messages: fakeChatData.map(message => {
        // setting unique ids for each message
        return {
          id: uniqueId("message_"),
          // ... = merge and overwrite if already exists
          ...message
        };
      }),
      newMessageValue: ""
    };
  };

  messageChangeHandler(event) {
    this.setState({
      newMessageValue: event.target.value
    });
  }

  submitHandler(event) {
    // prevent page refresh
    event.preventDefault();

    if (this.state.newMessageValue) {
      // make a new copy of messages
      const { newMessageValue } = this.state;

      const newMessage = {
        id: uniqueId("message_"),
        username: this.props.username,
        message: newMessageValue,
        fromMe: true
      };

      var newValues = this.state.messages.slice();    
      newValues.push(newMessage);   

      this.setState({
        //messages: [newMessage, ...messages],
        messages: newValues,
        newMessageValue: "" 
      });
    }
  }

  render(props) {
    return(
      <div>
        <Messages messageData={this.state.messages}/>
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            onChange={this.messageChangeHandler}
            value={this.state.chatInput}
            required />
          <input
            type="submit"
            value="Send" />
        </form>
      </div>
    );
  }
}

export default ChatRoom;
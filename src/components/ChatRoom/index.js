import React, { Component } from 'react';
import uniqueId from 'lodash/uniqueId';
import Messages from './Messages';
import SideBar from './SideBar';
import FakeChatData from '../../assets/data/fakeChatData.json';

class ChatRoom extends Component {
  constructor(props) {
    super(props);
    this.state = this.getDefaultState();

    this.submitHandler = this.submitHandler.bind(this);
    this.messageChangeHandler = this.messageChangeHandler.bind(this);
  }

  getDefaultState = () => {
    return {
      messages: FakeChatData.map(message => {
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
        fromMe: true,
        avatar: "green-avatar@2x.png"
      };

      var newValues = this.state.messages.slice();    
      newValues.push(newMessage);   
      this.setState({
        messages: newValues,
        newMessageValue: ""
      });
    }
  }

  componentDidMount() {
    const messageHistory = document.getElementById('messageHistory');
    messageHistory.scrollIntoView(false);
  }

  componentDidUpdate() {
    const messageHistory = document.getElementById('messageHistory');
    messageHistory.scrollIntoView(false);
  }

  render(props) {
    return(
      <div className="chat-room">
        <SideBar />
        <div className="chat-box-wrapper" id="messageHistory">
          <div className="header-bar">
            {/*<i className="fa fa-chevron-left back-button"></i>*/}
            Lunch Chat
          </div>
          <div className="message-history">
            <Messages messageData={this.state.messages} />
          </div>
          <div className="input-form">
            <form onSubmit={this.submitHandler}>
              <textarea
                onChange={this.messageChangeHandler}
                value={this.state.newMessageValue}
                required />
              <input
                type="submit"
                value="Send" />
            </form>
          </div>
        </div>
      </div> 
    );
  }
}

export default ChatRoom;
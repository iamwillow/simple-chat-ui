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
  }

  messageChangeHandler = (event) => {
    this.setState({
      newMessageValue: event.target.value
    });
  }

  submitHandler = (event) => {
    // prevent page refresh
    event.preventDefault();

    const { newMessageValue, messages } = this.state;

    if (newMessageValue) {
      const newMessage = {
        id: uniqueId("message_"),
        username: this.props.username,
        message: newMessageValue,
        fromMe: true,
        avatar: "green-avatar@2x.png"
      };

      var newValues = messages.slice();    
      newValues.push(newMessage);   
      this.setState({
        messages: newValues,
        newMessageValue: ""
      });
    }
  }

  setTimeStamp = () => {
    const date = new Date();
    var hours = date.getHours();
    var min = date.getMinutes();
    var ampm = '';

    if ( hours === 0 ){
      hours = 12;
    } else if (hours > 12){
      hours = hours - 12;
      ampm = "PM";
    } else {
      ampm = "AM";
    }

    if ( min < 10 ){
      min = '0' + min;
    }

    const timeStamp = hours + ':' + min + ' ' + ampm;

    return timeStamp;
  }

  enterKeyHandler = (event) => {

    const timeStamp = this.setTimeStamp();

    if(event.key === 'Enter' && !event.shiftKey){
      //prevent new line from being made
      event.preventDefault();

      const { newMessageValue, messages } = this.state;

      if (newMessageValue) {
        const newMessage = {
          id: uniqueId("message_"),
          username: this.props.username,
          message: newMessageValue,
          fromMe: true,
          avatar: "green-avatar@2x.png",
          timeStamp: timeStamp
        };

        this.setState({
          messages: [...messages, newMessage],
          newMessageValue: ""
        });
      }
    }
  }

  addTenMessagesHandler = () => {
    const { messages } = this.state;
    var randomMessages = {};

    for (var i=0; i<10; i++) {
      const randomUser = Math.floor(Math.random() * 2) + 1;
      const timeStamp = this.setTimeStamp();
      var avatar = '';

      if (randomUser === 1) { 
        avatar = 'purple-avatar@2x.png'; 
      } else { 
        avatar = 'green-avatar@2x.png'; 
      }

      var randomMessage = {
        id: uniqueId("random-message_"),
        username: 'user_' + randomUser,
        message: Math.floor(Math.random() * 100) + 1,
        fromMe: false,
        avatar: avatar,
        timeStamp: timeStamp
      }

      randomMessages = [...randomMessages, randomMessage];
    }

    this.setState({
      messages: [...messages, ...randomMessages]
    });
  }

  clearMessagesHandler = () => {
    this.setState({ messages: [] });
  }

  resetMessagesHandler = () => {
    this.setState( this.getDefaultState() );
  }

  componentDidMount() {
    const messageHistory = document.getElementById('messageHistory');
    messageHistory.scrollTop = messageHistory.scrollHeight;
  }

  componentDidUpdate() {
    const messageHistory = document.getElementById('messageHistory');
    messageHistory.scrollTop = messageHistory.scrollHeight;
  }

  render(props) {
    return(
      <div className="chat-room">
        <SideBar username={this.props.username} />
        <div className="chat-box-wrapper">
          <div className="debug-toolbar">
            Debug Toolbar
            <br />
            <button type="submit" onClick={this.addTenMessagesHandler}>
              Add 10 random messages
            </button>
            <br />
            <button type="submit" onClick={this.clearMessagesHandler}>
              Clear all messages
            </button>
            <br />
            <button type="submit" onClick={this.resetMessagesHandler}>
              Reset messages
            </button>
          </div>
          <div className="header-bar">
            {/*<i className="fa fa-chevron-left back-button"></i>*/}
            Lunch Chat
          </div>
          <div className="message-history" id="messageHistory">
            <Messages messageData={this.state.messages} />
          </div>
          <div className="input-form">
            <form onSubmit={this.submitHandler}>
              <textarea
                onChange={this.messageChangeHandler}
                onKeyPress={this.enterKeyHandler}
                value={this.state.newMessageValue}
                placeholder="Click here to type something..."
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
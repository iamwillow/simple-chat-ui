import React, { Component } from 'react';
import Messages from './Messages';

class ChatRoom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chatInput: ''
    }

    this.submitHandler = this.submitHandler.bind(this);
    this.textChangeHandler = this.textChangeHandler.bind(this);
  }

  textChangeHandler(event) {
    this.setState({
      chatInput: event.target.value
    });
  }

  submitHandler(event) {
    // prevent page refresh
    event.preventDefault();

    //this.props.onSend( this.state.chatInput );

    // this.setState({
    //   chatInput: ''
    // });

    console.log(this.state.chatInput);
  }

  render(props) {
    return(
      <div>
        <Messages />
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            onChange={this.textChangeHandler}
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
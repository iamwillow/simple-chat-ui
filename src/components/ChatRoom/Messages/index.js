import React, { Component } from 'react';
import Message from './Message';
import fakeChatData from '../../../assets/data/fakeChatData.json';

class Messages extends Component {

	componentDidUpdate() {
		//scroll after new message is added
		const messageHistory = document.getElementById('messageHistory');
		messageHistory.scrollTop = messageHistory.scrollHeight;
	}

	render() {
		return (
			<div id="messageHistory">
				{ fakeChatData.map((message, index) =>
					<Message
						key={index}
						username={message.username}
						message={message.message}
						fromMe={message.fromMe} />
				)}
			</div>
		);
	}
}

export default Messages;
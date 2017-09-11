import React, { Component }from 'react';
import uniqueId from 'lodash/uniqueId';
import FakeContactData from '../../../assets/data/fakeContactData.json';
import FakeGroupData from '../../../assets/data/fakeGroupData.json';

class SideBar extends Component {
	constructor(props) {
		super(props)
		this.state = this.getDefaultState();
	}

	getDefaultState = () => {
		return {
			contact: FakeContactData.map(contact => {
				return {
					id: uniqueId("contact_"),
					...contact
				};
			}),
			group: FakeGroupData.map(group => {
				return {
					id: uniqueId("group_"),
					...group
				};
			})
		}
	};

	render() {
		const online  = '';
		const offline = '';
		return (
			<div className="side-bar">
				<p className="direct-m-title">Direct Messsages</p>
				{	this.state.contact.map((contact) =>
					<div className="contact">
						<span className={ contact.online ? 'contact-icon online' : 'contact-icon offline' }>
							{ contact.online ? 'O' : 'X' }
						</span>
						{ contact.contact }
					</div>
				)}
				<p className="group-m-title">Group Chats</p>
				{	this.state.group.map((group) =>
					<div className={ group.current ? 'current-group contact group-chat' : 'contact group-chat' }>
						{ group.group }
					</div>
				)}
			</div>
		);
	}
}

export default SideBar;
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
		const onlineIcon  = <img className="online-icon" src={require('../../../assets/img/online@2x.png')} alt="O" />;
		const offlineIcon = <img className="offline-icon" src={require('../../../assets/img/offline@2x.png')} alt="X" />;
		return (
			<div className="side-bar">
				<img
					className="side-bar-avatar"
					src={require('../../../assets/img/green-avatar@2x.png')}
					alt="user avatar" />
				<p className="username">{ this.props.username }</p>
				<p className="direct-m-title">Direct Messsages</p>
				{	this.state.contact.map((contact) =>
					<div className="contact">
						<span className={ contact.online ? 'contact-icon online' : 'contact-icon offline' }>
							{ contact.online ? onlineIcon : offlineIcon }
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
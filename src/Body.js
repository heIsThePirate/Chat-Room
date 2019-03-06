import React, { Component } from 'react';
import Message from './Message';

class Body extends Component {
	constructor() {
		super();
		this.state = {
			chats: [{
				username: 'John',
				msg: 'Hello! Welcome to the chat room.'
			},
			{
				username: 'Sherlock',
				msg: 'Wait...does the earth really go around the sun??'
			}
			],
			float: 0
		};
	}

	changeFloat = () => {
		this.setState({
			float: !this.state.float
		})
	}

	render() {
		const { chats, float } = this.state;
		return (
			<div className='bg-washed-yellow'>
				{
					chats.map(chat => {
						this.changeFloat();
						return <Message chat={chat} float={float}/>
					})
				}
			</div>
			);
	}
}

export default Body;

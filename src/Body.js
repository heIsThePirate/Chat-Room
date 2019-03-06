import React from 'react';
import Message from './Message';

const Body = (props) => {
		const { chats } = props;
		console.log(chats);
		return (
			<div className='bg-washed-yellow'>
				{
					chats.map(chat => {
						return <Message msg={chat.msg} key={chat.username}/>
					})
				}
			</div>
			);
}

export default Body;

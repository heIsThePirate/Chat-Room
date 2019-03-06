import React from 'react';

const Message = (props) => {
	return (
		<div className='br4 bg-light-blue ma2 tc pa2 f`$(props.float) ? l : r `'>
			{props.chat.msg}
		</div>
		);
}

export default Message;
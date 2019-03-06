import React from 'react';

const Input = (props) => {
		return (
			<div>
				<input type='text' 
				 placeholder='Write a message'
				 className='fl w-90 br-pill dim'
				 value = {props.msg}
				 onChange={props.writeMessage}
				 />
				 <input type='button' 
				  value='Send'
				  className='fl w-10 grow br3'
				  onClick={props.handleClick}
				  />
			</div>
		);
}

export default Input;
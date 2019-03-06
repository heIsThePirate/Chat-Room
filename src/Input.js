import React, { Component } from 'react';

export default class extends Component {
	render() {
		return (
			<div>
				<input type='text' 
				 placeholder='Write a message'
				 className='fl w-90 br-pill dim'
				 />
				 <input type='button' 
				  value='Send'
				  className='fl w-10 grow br3'
				  />
			</div>
			);
	}
}
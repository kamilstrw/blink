import React from 'react'


export default class Modal extends React.Component
{
	constructor()
	{
		super();
	}
	render()
	{
		return(
			<div className={`dialogWindow ${this.props.active ? 'active' : ""}`} style={{width: this.props.width, height: this.props.height}}>
				{this.props.children}
			</div>
		)
	}
}
import React from 'react'

export default class Login extends React.Component
{
	constructor()
	{
		super();
		this.state = 
		{
			stage: 0
		}
	}
	render()
	{
		return(
			<div className="Page">Welcome</div>
		)
	}
}
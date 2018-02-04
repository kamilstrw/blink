import React from 'react'
import {connect} from 'react-redux'
import User from 'Classes/User'

let stateToProps = (state) => 
{
	return {
		user: state.user
	}
}
@connect(stateToProps)
export default class Login extends React.Component
{
	constructor()
	{
		super();
		this.state = 
		{
			stage: 0,
			user: new User()
		}
	}
	componentDidMount()
	{

	}
	render()
	{
		return(
			<div className="Login">
			<div className="Page">
				
			</div>
			</div>
		)
	}
}
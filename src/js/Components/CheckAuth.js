import React from 'react'
import {connect} from 'react-redux'
import Login from 'Pages/Login'

let stateToProps = (state) => 
{
	return {
		user: state.user
	}
}
@connect(stateToProps)
export default class CheckAuth extends React.Component
{
	constructor()
	{
		super();
	}
	render()
	{
		return(
			<div>{this.props.user ? this.props.children : }</div>
		)
	}
}
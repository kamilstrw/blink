import React from 'react'
import Nav from "Components/Navigation"

export default class Page extends React.Component
{
	constructor()
	{
		super();
	}
	render()
	{
		return(
			<div className="Page">
				<div className="Page-head">
					<h1>{this.state.pageTitle}</h1>
					<Nav/>
				</div>
				<div className="Page-content">
					{this.renderPage()}
				</div>
			</div>
		)
	}
}
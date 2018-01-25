import React from 'react'

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
				</div>
				{this.renderPage()}
			</div>
		)
	}
}
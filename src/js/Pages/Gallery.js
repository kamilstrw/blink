import React from 'react'
import Page from 'Components/Page'
import Canvas from 'Components/DrawCanvas'

export default class Gallery extends Page
{
	constructor()
	{
		super()
		this.state = 
		{
			pageTitle: "Gallery"
		}
	}

	renderPage(){
		return(
		<div><Canvas/></div>
		)
	}
}
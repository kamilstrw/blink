import React from 'react'
import Page from 'Components/Page'
import Canvas from 'Components/DrawCanvas'
import Album from 'Components/Album'


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
		<div className="galleryPage">
			<div className="Gallery-title">
				<h3>Welcome to the gallery. Here you can draw something.</h3> 
			</div>
			<div>
				<Canvas/>
			</div>
			<div>
			</div> 
		</div>
		)
	}
}
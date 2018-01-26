import React from 'react'
import {Link} from 'react-router-dom'


export default class Navigation extends React.Component
{
	constructor()
	{
		super();
	}

	render()
	{
		return(
			<ul className="Navigation">
				<li><Link to="/"><button>Home</button></Link></li>
				<li><Link to="/gallery"><button>Gallery</button></Link></li>			
			</ul>
		)
	}
}
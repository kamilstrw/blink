import React from 'react'
import {NavLink} from 'react-router-dom'


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
				<li><NavLink exact to="/" activeClassName="active"><button>Home</button></NavLink></li>
				<li><NavLink to="/gallery" activeClassName="active"><button>Gallery</button></NavLink></li>			
			</ul>
		)
	}
} 
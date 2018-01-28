import React from 'react'

export default class DrawCanvas extends React.Component
{
	constructor()
	{
		super();
		this.state = 
		{
			context: null,
			ofsetX: 0,
			ofsetY: 0
		}
		this.draw = this.draw.bind(this);
	}
	componentDidMount()
	{
		this.refs.canvas.addEventListener('mousemove', this.draw);
		let node = this.refs.canvas.getBoundingClientRect();
		let _context = this.refs.canvas.getContext('2d');
		this.setState({context: _context, ofsetX: node.x, ofsetY: node.y});
	}
	draw(event)
	{
		console.log(event);
		if (event.buttons === 1)
		{
			let x = event.clientX - this.state.ofsetX;
			let y = event.clientY - this.state.ofsetY;
			this.state.context.fillStyle = "black";
			this.state.context.fillRect(x/2-2, y/2-2, 5, 5);			
		}
	}
	render()
	{
		return(
			<div>
				<canvas ref="canvas" onClick={(e)=>this.draw(e)} className="DrawCanvas"></canvas>
			</div>
		)
	}
}
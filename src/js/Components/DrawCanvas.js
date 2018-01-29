import React from 'react'
import {HuePicker} from 'react-color'

export default class DrawCanvas extends React.Component
{
	constructor()
	{
		super();
		this.state = 
		{
			context: null,
			ofsetX: 0,
			ofsetY: 0,
			color: "fff",
			width: 5,
			name: null
		}
		this.draw = this.draw.bind(this);
		this.handleChangeComplete = this.handleChangeComplete.bind(this);
		this.handleTitleChange = this.handleTitleChange.bind(this);
		this.clearContext = this.clearContext.bind(this);
	}
	componentDidMount()
	{
		this.refs.canvas.addEventListener('mousemove', this.draw);
		let node = this.refs.canvas.getBoundingClientRect();
		let _context = this.refs.canvas.getContext('2d');
		this.setState({context: _context, ofsetX: node.x, ofsetY: node.y});
	}
	handleTitleChange()
	{
		console.log(event)
		this.setState({name: event.target.value});
	}
	handleChangeComplete(color)
	{
		this.setState({color: color.hex})
	}
	draw(event)
	{

		if (event.buttons === 1)
		{
			console.log(event)
			this.state.context.fillStyle = this.state.color;
			this.state.context.fillRect(event.offsetX/2-this.state.width/2, event.offsetY/2-this.state.width/2, this.state.width, this.state.width);			
		}
	}
	clearContext()
	{
		this.state.context.clearRect(0, 0, this.refs.canvas.width, this.refs.canvas.height);
	}
	render()
	{
		return(
			<div className="DrawWorkspace">
				<canvas ref="canvas" onClick={this.draw} className="Canvas"></canvas>
				<div className="palet">
					<HuePicker color={this.state.color} onChangeComplete={ this.handleChangeComplete }/>
					<div>
						<button onClick={this.clearContext}><i className="fa fa-eraser" aria-hidden="true"></i></button>
						<button><i className="fa fa-save" aria-hidden="true"></i></button>
					</div>	
				</div> 
			</div>
		)
	}
}
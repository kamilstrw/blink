import React from 'react';

export default class Eye extends React.Component
{
	constructor()
	{
		super();
		this.state = 
		{
			x: "30%",
			y: "30%"
		}
		this.lookAt = this.lookAt.bind(this);
		this.getEyeCenter = this.getEyeCenter.bind(this); 
	}
	componentDidMount()
	{
		document.body.addEventListener('mousemove', this.lookAt)
	}
	lookAt(event)
	{
		let node = this.refs.eyebase.getBoundingClientRect()
		let center = this.getEyeCenter(node);
		let vector = {x: event.clientX - center.x, y: event.clientY-center.y};
		let vectorModule = Math.sqrt((vector.x * vector.x) + (vector.y * vector.y));
		let cosX = vector.x/vectorModule;
		let cosY = vector.y/vectorModule;

		let newPos = {
			x: node.width * 0.3 + (vectorModule > (node.width*0.3) ? (node.width*0.3) * cosX : vectorModule * cosX),
			y: node.height * 0.3 + (vectorModule > (node.height*0.3) ? (node.height*0.3) * cosY : vectorModule * cosY)
		}
		this.setState(newPos);

	}
	getEyeCenter(node)
	{
		let coordinates = {
			x: node.left + node.width / 2,
			y: node.top + node.height / 2
			}
		return coordinates;
	}
	render()
	{
		return(
			<div className="eye">
				<div ref="eyebase" className="eye-inside">
					<div ref="pupil" style={{left: this.state.x, top: this.state.y}} className="eye-inside-pupil"></div>
					<div className="eye-inside-bottomEyelid"></div>
					<div className="eye-inside-topEyelid"></div>
				</div> 
			</div>
			)
	}
}
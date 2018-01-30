import React from 'react'
import {HuePicker} from 'react-color'
import Slider  from 'rc-slider'

import Modal from "Components/Modal"

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import * as actionsImages from 'Store/Images/actions.js'

let actionsToProps = dispatch => bindActionCreators(actionsImages, dispatch);

let stateToProps = state => ({
    images: state.Images
});

@connect(stateToProps, actionsToProps)
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
			color: "white",
			width: 5,
			saving: false
		}
		this.draw = this.draw.bind(this);
		this.handleChangeComplete = this.handleChangeComplete.bind(this);
		this.clearContext = this.clearContext.bind(this);
		this.toggleSaveModal = this.toggleSaveModal.bind(this);
		this.preSaveImage = this.preSaveImage.bind(this);
		this.saveImage = this.saveImage.bind(this);
		this.changeBrushWidth = this.changeBrushWidth.bind(this);
	}
	componentDidMount()
	{
		this.refs.canvas.addEventListener('mousemove', this.draw);
		let node = this.refs.canvas.getBoundingClientRect();
		let _context = this.refs.canvas.getContext('2d');
		_context.fillStyle = "white";
		_context.fillRect(0, 0, this.refs.canvas.width, this.refs.canvas.height);
		this.setState({context: _context, ofsetX: node.x, ofsetY: node.y});
	}
	handleChangeComplete(color)
	{
		this.setState({color: color.hex})
	}
	changeBrushWidth(event)
	{
		this.setState({width: event})
	}
	draw(event)
	{

		if (event.buttons === 1)
		{
			this.state.context.fillStyle = this.state.color;
			this.state.context.beginPath();
			this.state.context.arc(event.offsetX/2, event.offsetY/2, this.state.width, 0, 2 * Math.PI);	
			this.state.context.fill();		
		}
	}
	clearContext()
	{
		this.state.context.fillStyle = "white";
		this.state.context.fillRect(0, 0, this.refs.canvas.width, this.refs.canvas.height);
	}
	preSaveImage()
	{
		this.refs.preview.src=this.refs.canvas.toDataURL('image/jpeg');
		this.toggleSaveModal();
	}
	toggleSaveModal()
	{
		this.setState({saving: !this.state.saving})
	}
	saveImage()
	{
		//scrap code
		let Image = {
			id: this.props.images.length + 1,
			author: '',
			title: this.refs.imageTitle.value,
			image: this.refs.preview.src,
			comments: [],
			likes: 0
		}
		this.props.SaveImage(Image);
		this.toggleSaveModal();
		this.clearContext();
	}
	render()
	{
		return(
			<div className="DrawWorkspace">
				<canvas ref="canvas" onClick={this.draw} className="Canvas"></canvas>
				<div className="palet">
					<HuePicker color={this.state.color} onChangeComplete={ this.handleChangeComplete }/>
					<Slider min={5} max={50} defaultValue={5} onChange={this.changeBrushWidth} className="brushWidth"/>
					<div className="curentColor"  style={{backgroundColor: this.state.color, height: "32px", width: "32px"}}></div>
					<div>
						<button onClick={this.clearContext} disabled={this.state.saving}><i className="fa fa-eraser" aria-hidden="true"></i></button>
						<button onClick={this.preSaveImage} disabled={this.state.saving}><i className="fa fa-save" aria-hidden="true"></i></button>
					</div>	
				</div>
				<Modal active={this.state.saving} width="650px" height="400px">
					<h3>Title for your picture</h3>
					<input ref="imageTitle" type="text"/>
					<img className="ImagePreview" ref="preview"/>
					<div className="actions">
						<button onClick={this.toggleSaveModal}>Cancel</button>
						<button onClick={this.saveImage}><i className="fa fa-save" aria-hidden="true"></i></button>
					</div>
				</Modal>
			</div>
		)
	}
}
import React from 'react'
import {connect} from 'react-redux'
import User from 'Classes/User'
import Modal from 'Components/Modal'
import Cropper from 'react-cropper'
import 'cropperjs/dist/cropper.css'

let stateToProps = (state) => 
{
	return {
		user: state.user
	}
}
@connect(stateToProps)
export default class Login extends React.Component
{
	constructor()
	{
		super();
		this.state = 
		{
			stage: 0,
			user: new User(),
			canGoForward: false,
			showCropper: false,
			avatarPreview: null,
			croppedAvatar: null
		}
		this.goToNext = this.goToNext.bind(this);
		this.handleInput = this.handleInput.bind(this);
		this.chooseAvatar = this.chooseAvatar.bind(this);
		this.handleAvatar = this.handleAvatar.bind(this);
		this.getCroppedAvatar = this.getCroppedAvatar.bind(this);
	}
	componentDidMount()
	{
		let showWelcome = setTimeout(()=>{this.setState({stage: 1})}, 500);
		let showInputName = setTimeout(()=>{this.setState({stage: 2})}, 2000);		
	}
	goToNext()
	{
		this.setState({stage: this.state.stage + 1, canGoForward: false});
	}
	handleInput(event)
	{
		let key = event.target.name;
		let value = event.target.value;
		this.state.user.set(key, value);
		this.setState({canGoForward: this.state.user.validate(key)})
	}
	chooseAvatar()
	{
		this.refs.profilePic.click();
	}
	handleAvatar(event)
	{
		let file = event.target.files[0];
		let reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onloadend = () =>
		{
			this.setState({showCropper: true, avatarPreview: reader.result})
		}
	}
	getCroppedAvatar()
	{
		this.setState({croppedAvatar: this.refs.cropper.getCroppedCanvas().toDataURL(), showCropper: false})
	}
	render()
	{
		return(
			<div className="Login">
			<div className="Page">
				<div className="PopupMessage">
					<span className={`popup ${this.state.stage == 1 ? 'current' : ''} ${this.state.stage > 1 ? 'hidden' : ''}`}>Welcome</span>
					<div className={`popup block introduction ${this.state.stage == 2 ? 'current' : ''} ${this.state.stage > 2 ? 'hidden' : ''}`}>
						<p>This is my React app for testing some stuff I'm interested in.</p>
						<p>It all started with an eye on top of the page.</p>
						<p>Well, that was pretty easy and took only 15 minutes and 8 lines of code</p>
						<p>Then I decided to create app prototype and add some features</p>
						<p>Click "Next" to begin kind of registration</p>
						<small>*I'm too greedy to buy hosting, so all information will disapear after page reload</small>
						<button onClick={this.goToNext}>Next</button>
					</div>

					<div className={`popup block ${this.state.stage == 3 ? 'current' : ''} ${this.state.stage > 3 ? 'hidden' : ''}`}>
						<label>Enter your name</label>
						<input name="name" type="text" onChange={this.handleInput}/>
						<button onClick={this.goToNext} disabled={!this.state.canGoForward}>Next</button>
					</div>

					<div className={`popup block ${this.state.stage == 4 ? 'current' : ''} ${this.state.stage > 4 ? 'hidden' : ''}`}>
						<label>Enter yout age</label>
						<input name="age" type="nubmer" step="1" min="0" onChange={this.handleInput}/>
						<button onClick={this.goToNext} disabled={!this.state.canGoForward}>Next</button>
					</div>

					<div className={`popup block ${this.state.stage == 5 ? 'current' : ''} ${this.state.stage > 5 ? 'hidden' : ''}`}>
						<label>Choose profile picture</label>
						<input type="file" ref="profilePic" accept="image/png, image/jpeg" style={{display: "none"}} onChange={this.handleAvatar}/>
						<button onClick={this.chooseAvatar}>Choose Image</button>
						{this.state.croppedAvatar && <img src={this.state.croppedAvatar}/>}
						<button onClick={this.goToNext} disabled={!this.state.canGoForward}>Next</button>
					</div>

					<Modal active={this.state.showCropper} width="400px" height="400px">
						<Cropper ref="cropper"
							src={this.state.avatarPreview}
							style={{width:"80%", height:"80%"}}
							aspectRatio={1 / 1}
						/>
						<div className="actions">
							<button onClick={this.getCroppedAvatar}>Done</button>
						</div>
					</Modal>

					<div className={`popup block ${this.state.stage == 6 ? 'current' : ''} ${this.state.stage > 6 ? 'hidden' : ''}`}>
						<label>Tell something about yourself</label>
						<textarea name="info" onChange={this.handleInput}/>
						<button onClick={this.goToNext} disabled={!this.state.canGoForward}>Next</button>
					</div>
				</div>
			</div>
			</div>
		)
	}
}
import React from 'react'
import Eye from 'Components/Eye'
export default class Head extends React.Component
{
	constructor()
	{
		super();
	}
	render(){
		return(
			<div className="head">
				<div className="head-title">
					<p>BLINK</p>
				</div>
				<div className="head-eye">
					<Eye/>
				</div>
				<div className="head-contacts">
					<div className="head-contacts-google">
					 <span>Email: </span><a>kamil.sattarow@gmail.com</a>
					 <img className="head-contacts-google-avatar" src="https://lh3.googleusercontent.com/-Qyn0Tx8x17o/AAAAAAAAAAI/AAAAAAAAAAA/ACSILjVMzCJg3ufQ6_Uv7JYeAmScO5V_3w/s32-c-mo/photo.jpg"/>
					</div>
					<div className="head-contacts-github">
					 <span>GitHub: </span><a target="_blank" href="https://github.com/kamilstrw">https://github.com/kamilstrw</a>
					</div>
				</div>
			</div>
		)
	}
}
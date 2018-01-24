import React from 'react'
import { Router, Route, Switch } from 'react-router'
import { HashRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';

import style from "Styles/index.scss"

import App from './App'

ReactDOM.render((
	<HashRouter>
		<App />
	</HashRouter>	
	), document.getElementById('main'));
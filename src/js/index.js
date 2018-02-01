import React from 'react'
import { Router, Route, Switch } from 'react-router'
import { HashRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import Store from "Store"

import style from "Styles/index.scss"
import 'rc-slider/assets/index.css';

import App from './App'

ReactDOM.render((
	<Provider store={Store}> 
		<HashRouter>
			<App />
		</HashRouter>
	</Provider>		
	), document.getElementById('main'));
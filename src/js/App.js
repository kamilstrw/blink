import React from 'react';
import Header from "Components/Head";
import Main from "Components/Main";
import { Switch, Route} from 'react-router-dom';

const App = () =>
(
	<div>
		<Header/>
		<Switch>
			<Main/>
		</Switch>
	</div>
);
export default App;
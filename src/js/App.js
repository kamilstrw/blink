import React from 'react';
import Header from "Components/Head";
import Main from "Components/Main";
import Auth from "Components/CheckAuth";

const App = () =>
(
	<div>
		<Header/>
		<Auth>
			<Main/>
		</Auth>
	</div>
);
export default App;
import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Pages from 'Pages'

 export default class Main extends React.Component
{

	render()
	{
	 return (
		<main>
	     <Switch>
	      <Route exact path='/' component={Pages.Home}/>
	      <Route path='/gallery' component={Pages.Gallery}/>
	     </Switch>
		</main>
		)
	}
}

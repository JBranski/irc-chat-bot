import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Navigation } from '../Navigation/Navigation';
import { Home } from '../Home/Home';
import { Commands } from '../Commands/Commands';
import { Requests } from '../Requests/Requests';

import './App.min.css';

export default function App() {
	return (
		<div className='App'>
			<Navigation />
			<Switch>
				<Route exact path="/" component={ Home } />
				<Route path="/commands" component={ Commands } />
				<Route path="/requests" component={ Requests } />
			</Switch>
		</div>
	);
}
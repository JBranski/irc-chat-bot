import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import { ChannelRequests } from './ChannelRequests';
import { CommandRequests } from './CommandRequests';

import './Requests.min.css';

export const Requests = class extends Component {

	state = {
		hasErr : false,
		errMsg : "",
	}

	channelRequest = (e) => {
		e.preventDefault();
		let channel = {
			name: e.target['channelName']
		}

		fetch(`API/names`, {
			method: 'POST',
			header: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(channel),
		})
			.then(res => {
				if(!res.ok) {
					return res.json().then(e => Promise.reject(e))
				}
				return res.json()
			})
			.catch(error => {
				console.error({ error })
			})
	}
	
	sendChannelRequest = (e) => {
		e.preventDefault();
		let channel = e.target[0].value;
	
		if( channel.length < 4 || channel.length > 25) {
			console.log("Channel must be between 4 and 25 characters");
			return
		} else if ( /\s/.test(channel) ) {
			console.log("Twitch usernames cannot have spaces.")
		}

		e.target.reset()
	}

	sendCommandRequest = (e) => {
		e.preventDefault();
		let comName = e.target[0].value;
		let comRes = e.target[1].value;

		if(comName.length > 16){
			console.log("Command name must be below 16 characters");
		} else if (/\s/.test(comName)) {
			console.log("Command names cannot have spaces")
		} else if (comRes.length < 3 || comRes.length > 240) {
			console.log("Command responses cannot exceed 240 characters")
		}
	}

	render () {
		return (
			<main className="Requests">
				<h2>Requests</h2>
				<section className="requestOptions">
					<NavLink to="/requests/channel" className="requestBtn">
						Channel Request
					</NavLink>
		
					<NavLink to="/requests/commands" className="requestBtn">
						Command Request
					</NavLink>
				</section>

				<Route path="/requests/channel" render={(props) => (
   					<ChannelRequests requestChannel={this.sendChannelRequest} />
				)}/>
				<Route path="/requests/commands" render={(props) => (
					<CommandRequests requestCommand={this.sendCommandRequest} />
				)}/>
			</main>
		)
	}
}
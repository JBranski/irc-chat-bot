import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import { ChannelRequests } from './ChannelRequests';
import { CommandRequests } from './CommandRequests';

import config from '../../config';

import './Requests.min.css';

export const Requests = class extends Component {

	state = {
		hasErr : false,
		errMsg : "",
	}

	channelRequest = (e) => {
		e.preventDefault();
		let channel = {
			name: e.target['channelName'].value
		}

		fetch(`${config.API_ENDPOINT}/requests`, {
			method: 'POST',
			mode: 'cors',
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

			e.target['channelName'].value = "";
	}

	commandRequest = (e) => {
		e.preventDefault();
		let command = {
			name: e.target['commandName'].value,
			comresponse: e.target['commandRes'].value
		}

		fetch(`${config.API_ENDPOINT}/requests`, {
			method: 'POST',
			mode: 'cors',
			header: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(command),
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

			e.target['commandName'].value = "";
			e.target['commandRes'].value = "";
	}

	render () {
		return (
			<main className="Requests">
				<h2>Requests</h2>
				<section className="requestOptions">
					{/* Opens request channel form */}
					<NavLink to="/requests/channel" className="requestBtn">
						Channel Request
					</NavLink>
		
					{/* Opens request command form */}
					<NavLink to="/requests/commands" className="requestBtn">
						Command Request
					</NavLink>
				</section>

				<Route path="/requests/channel" render={(props) => (
   					<ChannelRequests reqChannel={this.channelRequest} />
				)}/>
				<Route path="/requests/commands" render={(props) => (
					<CommandRequests reqCommand={this.commandRequest} />
				)}/>
			</main>
		)
	}
}
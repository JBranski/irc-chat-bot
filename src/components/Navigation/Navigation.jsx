import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navigation.min.css";

export const Navigation = () => {
	return (
		<nav className="Navigation">
			<ul>
				<li>
					<NavLink to="/">
						<h1>Ame Help Bot</h1>
					</NavLink>
				</li>
				<li>
					<NavLink to="/">Home</NavLink>
				</li>
				<li>
					<NavLink to="/commands">Commands</NavLink>
				</li>
				<li>
					<NavLink to="/requests">Requests</NavLink>
				</li>
			</ul>
		</nav>
	)
}
import React, { Component } from 'react';
import './Commands.min.css';

export const Commands = class extends Component {
	render () {
		const testCommands = {
			"!hello" : "Hello chat! Ame bot wishes you well :)",
			"!best" : "You da best",
			"!steam" : "Sorry, I only add close friends on steam!",
			"!game" : "We are currently watching some poor gameplay by Faith",
			"!color" : "My name is the color 'color'!",
			"!dice" : "You rolled a 'number'"
		}
		return (
			<main className="Commands">
				<h2>Commands</h2>
				<p>Below is a list of all active commands for Ame. The bolded test is what is used to call the command in chat, and the text below is the expected output from Ame.</p>
				<ul className="commandList">
					{
						Object.entries(testCommands).map(([key, value]) => {
							return (
								<li key={key}>
									<p className="bold">{key}</p>
									<p className="output">{value}</p>
								</li>
							)
						})
					}
				</ul>
			</main>
		)
	}
}
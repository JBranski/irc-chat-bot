import React from 'react';
import './Home.min.css';

export const Home = () => {
	return (
		<main className="Home">
			<h2>Welcome to the home of Amethyst Help Bot</h2>
			<p>The Amethyst Help Bot, often just called Ame, is an IRC chat bot that is there to help make your Twitch chat more interactive. In order to prevent griefing, trolling, or other unwanted behaviors, all requests for commands and channels to be added are manually screened.</p>
			<p>You may view all currently approved commands under the Commands link, and you may make requests for a command or a channel to be added under the requests tab. If you want to see the bot live in action, please feel free to visit <a href="https://twitch.tv/with_faith">With Faith's</a> Twitch account to test out commands. Due to the Terms of Service by Twitch, a demo account is not available to be shared for testing.</p>
			<section className="highlights">
				<h2>Bot Highlights</h2>
				<section className="highlights-item">
					<h3>Easy to use</h3>
				</section>
				<section className="highlights-item">
					<h3>For any channel</h3>
				</section>
				<section className="highlights-item">
					<h3>Simple requests</h3>
				</section>
			</section>
		</main>
	)
}
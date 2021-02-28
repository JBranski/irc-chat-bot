import React from 'react';

export const ChannelRequests = function ( props ) {
	return (
		<form action="" className="ChannelRequests" onSubmit={(e) => props.reqChannel(e)}>
			<p>Please enter your Twitch Username to request being added to the Ame bot list.</p>
			<label>
				Twitch username:<br />
				<input type="text" name="channelName" id=""/>
			</label>
			<p className="disclaimer">By submitting this form, you agree that you are the owner of the account, or have prior authorization from the account owner to submit their name.</p>
			<button type="submit">Submit Request</button>
		</form>
	)
}
import React from 'react';

export const CommandRequests = (props) => {
	return (
		<form action="" className="CommandRequests" onSubmit={(e) => props.reqCommand(e)}>
			<p>Please enter a command name and the desired command response.</p>
			<label>
				Command name:<br />
				<input type="text" name="commandName" />
			</label>
			<label>
				Command response:<br />
				<textarea name="commandRes" id="" cols="17" rows="3"></textarea>
			</label>
			<button type="submit">Submit Request</button>
		</form>
	)
}
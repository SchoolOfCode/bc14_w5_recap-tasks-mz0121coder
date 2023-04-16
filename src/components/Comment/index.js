/* Create a Comment component as default export 
Takes in author and content as props
Returns the author's capitalised initials in a circle
Also displays the author's name and content of the comment*/
import React from 'react';

function Comment({ author, content }) {
	// Get initials of author's full name
	const initials = author
		.split(' ')
		.map(name => name.charAt(0).toUpperCase())
		.join('');

	const initialsCircleStyle = {
		backgroundColor: '#bbb',
		borderRadius: '50%',
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: '50px',
		height: '50px',
		marginRight: '10px',
		fontWeight: 'bold',
		fontSize: '16px',
		textTransform: 'uppercase',
	};

	const commentStyle = {
		display: 'flex',
		marginBottom: '20px',
	};

	const contentStyle = {
		flex: 1,
	};

	const authorStyle = {
		fontWeight: 'bold',
		marginBottom: '5px',
	};

	return (
		<div style={commentStyle}>
			<div style={initialsCircleStyle}>{initials}</div>
			<div style={contentStyle}>
				<p style={authorStyle}>{author}</p>
				<p>{content}</p>
			</div>
		</div>
	);
}

export default Comment;

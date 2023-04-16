/* 
Create a comment form with label and input for author and comment

Call onSubmit with user's name (author) and comment when button is clicked, if empty, do not call onSubmit

Use a default name for the author

Clear the input for comment after calling onSubmit, but not for the name
*/
import React, { useState } from 'react';

function CommentForm({ onSubmit }) {
	const [author, setAuthor] = useState('');
	const [comment, setComment] = useState('');

	const handleAuthorChange = event => {
		setAuthor(event.target.value);
	};

	const handleCommentChange = event => {
		setComment(event.target.value);
	};

	const handleSubmit = event => {
		event.preventDefault();
		onSubmit(author, comment);
		setAuthor('');
		setComment('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor='author'>Name:</label>
				<input
					type='text'
					id='author'
					value={author}
					onChange={handleAuthorChange}
				/>
			</div>
			<div>
				<label htmlFor='comment'>Comment:</label>
				<textarea id='comment' value={comment} onChange={handleCommentChange} />
			</div>
			<button type='submit'>Submit</button>
		</form>
	);
}

export default CommentForm;

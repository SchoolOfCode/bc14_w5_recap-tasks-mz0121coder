/* 
Create a comment form with label and input for author and comment

Call onSubmit with user's name (author) and comment when button is clicked, if empty, do not call onSubmit

Use a default name for the author

Clear the input for comment after calling onSubmit, but not for the name
*/

import { useState } from 'react';
function CommentForm({ onSubmit }) {
	const [author, setAuthor] = useState('Anon Author');
	const [comment, setComment] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		if (comment.trim() !== '') {
			onSubmit({ author, comment });
			setComment('');
		}
	};

	return (
		<form action='submit' onSubmit={handleSubmit}>
			<div>
				<label htmlFor='author'>Author:</label>
				<input
					type='text'
					id='author'
					placeholder='Anon Author'
					onChange={e => {
						setAuthor(e.target.value);
					}}
					value={author}
				/>
			</div>
			<div>
				<label htmlFor='comment' id='comment'>
					Comment:
				</label>
				<textarea
					name='comment'
					id='comment'
					cols='30'
					rows='10'
					onChange={e => {
						setComment(e.target.value);
					}}>
					{comment}
				</textarea>
			</div>
			<button>Submit</button>
		</form>
	);
}

export default CommentForm;

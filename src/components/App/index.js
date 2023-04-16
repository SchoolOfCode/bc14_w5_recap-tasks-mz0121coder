import React, { useState } from 'react';
import BlogPost from '../BlogPost';
import CommentList from '../CommentList';
import CommentForm from '../CommentForm';
import { blog } from '../../data/blogs';

const App = () => {
	const [comments, setComments] = useState([
		{
			id: 'kskBC5HZ8qgNQUiW6If6q',
			author: 'Billy Bootcamper',
			content: 'Hello, great post',
		},
		{
			id: 'jFyGAKz1VsGputO1gV8xa',
			author: 'Chris Meah',
			content: 'Many thank yous',
		},
	]);

	const handleAddComment = (author, comment) => {
		if (!comment) {
			return;
		}
		const newComment = {
			id: new Date().toISOString(),
			author: author || 'Anon Author',
			content: comment,
		};
		setComments(prevComments => [...prevComments, newComment]);
	};

	return (
		<div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
			<BlogPost blog={blog} />
			<CommentForm onSubmit={handleAddComment} />
			<CommentList comments={comments} />
		</div>
	);
};

export default App;

import BlogPost from '../BlogPost';
import CommentList from '../CommentList';
// import Comment from '../Comment';
import CommentForm from '../CommentForm';
import { useState } from 'react';
import { blog } from '../../data/blogs.js';

function App() {
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

	const addComment = (author, comment) => {
		const newComment = { id: Date.now().toString(), author, content: comment };
		setComments([...comments, newComment]);
	};

	return (
		<main>
			<BlogPost blog={blog} />
			<CommentList comments={comments} />
			<CommentForm onSubmit={addComment} />
		</main>
	);
}

export default App;

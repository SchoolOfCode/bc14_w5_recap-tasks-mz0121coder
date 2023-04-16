// Create a component BlogPost (for this exercise, make it the default export in src/components/BlogPost/index.js)
import React from 'react';

function BlogPost({ blog }) {
	const postStyle = {
		maxWidth: '800px',
		margin: '0 auto',
		padding: '20px',
		boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
		borderRadius: '5px',
		backgroundColor: '#fff',
	};

	const titleStyle = {
		fontSize: '36px',
		fontWeight: 'bold',
		marginBottom: '10px',
		color: '#333',
	};

	const authorStyle = {
		color: '#999',
		fontSize: '14px',
		fontStyle: 'italic',
		marginBottom: '10px',
	};

	const dateStyle = {
		color: '#999',
		fontSize: '14px',
		marginBottom: '20px',
	};

	const imageStyle = {
		display: 'block',
		width: '100%',
		height: 'auto',
		borderRadius: '5px',
		marginBottom: '20px',
	};

	const contentStyle = {
		lineHeight: '1.6',
		fontSize: '18px',
		color: '#333',
	};

	return (
		<article style={postStyle}>
			<h2 style={titleStyle}>{blog.title}</h2>
			<p style={authorStyle}>By {blog.author}</p>
			<p style={dateStyle}>{blog.datePosted}</p>
			<img style={imageStyle} src={blog.imageSrc} alt={blog.imageAlt} />
			<p style={contentStyle}>{blog.content}</p>
		</article>
	);
}

export default BlogPost;

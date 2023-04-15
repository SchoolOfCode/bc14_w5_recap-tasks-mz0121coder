// Create a component BlogPost (for this exercise, make it the default export in src/components/BlogPost/index.js)

function BlogPost({ blog }) {
	return (
		<div className='blog-post'>
			<h2 className='blog-title'>{blog.title}</h2>
			<p className='blog-author'>{blog.author}</p>
			<p className='blog-date'>{blog.datePosted}</p>
			<img src={blog.imageSrc} alt={blog.imageAlt} className='blog-image' />
		</div>
	);
}

export default BlogPost;

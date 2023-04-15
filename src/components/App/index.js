import BlogPost from '../BlogPost';
import Comment from '../Comment';

function App() {
	const blog = {
		title: 'My First Post',
		author: 'Chris Meah',
		datePosted: '20/11/2019',
		content: `
      A structure used in most apps and games.
      It's a way to keep doing the same.
      While a condition is true,
      Or for one to twenty-two.
      If endless, for errors we blame
      ..........
      Loop `,
		imageSrc:
			'https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		imageAlt: 'A couple of coders.',
	};
	const author = 'Ben Lee';
	const content = 'Hello, great post!';
	return (
		<main>
			<BlogPost blog={blog}></BlogPost>
			<Comment author={author} content={content}></Comment>
		</main>
	);
}

export default App;

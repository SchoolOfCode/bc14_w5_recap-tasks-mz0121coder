/* Create a Comment component as default export 
Takes in author and content as props
Returns the author's capitalised initials in a circle
Also displays the author's name and content of the comment*/
function Comment({ author, content }) {
	const initials = author
		.split(' ')
		.map(word => word[0])
		.join('')
		.toUpperCase();
	return (
		<div className='comment'>
			<div
				className='circle'
				style={{
					display: 'inline-block',
					backgroundColor: '#00d53b',
					margin: '10px',
					borderRadius: '50%',
				}}>
				<p
					className='circle-inner'
					style={{
						color: 'white',
						display: 'table-cell',
						verticalAlign: 'middle',
						textAlign: 'center',
						textDecoration: 'none',
						height: '100px',
						width: '100px',
						fontSize: '30px',
					}}>
					{initials}
				</p>
			</div>
			<div className='comment-details'>
				<p>{author}</p>
				<p>{content}</p>
			</div>
		</div>
	);
}

export default Comment;

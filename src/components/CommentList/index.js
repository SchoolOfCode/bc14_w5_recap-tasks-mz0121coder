import Comment from '../Comment';

function CommentList({ comments }) {
	return comments.map(comment => (
		<Comment
			key={comment.id}
			author={comment.author}
			content={comment.content}></Comment>
	));
}

export default CommentList;

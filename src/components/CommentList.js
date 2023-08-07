import {useState} from "react";
import moment from 'moment';
import useFetch from "../hooks/useFetch";
import {authHeader} from "../_helpers/auth-header";

const CommentList = ({blogId}) => {

    const [commentMessage, setCommentMessage] = useState('');
    const {data: comments} = useFetch('/api/v1/comments/' + blogId);

    const handlePostComment = () => {
        fetch('/api/v1/comments', {
            method: 'Post',
            headers: {
                ...authHeader(),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'blogId': blogId,
                'commentMessage': commentMessage
            })
        }).then(() => {
            // const {data: comments} = useFetch('/comments/' + blogId);
        });
    }

    return (
        <div className="comment-list">
            <form onClick={handlePostComment}>
                <input
                    placeholder="Add a comment..."
                    required
                    value={commentMessage}
                    onChange={(e) => setCommentMessage(e.target.value)}
                />
                <button>Post</button>
            </form>
            {comments && comments.map((comment) => (
                <div className="comment-view" key={comment.id}>
                    <span>{comment.author}</span>
                    <span className="comment-posted">{moment(comment.posted).fromNow()}</span>
                    <div className="comment-body">{comment.body}</div>
                </div>
            ))}
        </div>
    );
}

export default CommentList;
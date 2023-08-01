import {useHistory, useParams} from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Cookies from "universal-cookie";
import CommentList from "./CommentList";


const BlogDetails = () => {
    const DATA_SERVICE_URL = process.env.REACT_APP_DATA_AUTH_SERVICE;

    const cookies = new Cookies();

    const {id} = useParams();

    const {data: blog, isPending, error} = useFetch('/blogs/' + id);
    const {data: isShowDeleteBtn} = useFetch('/blogs/isMy/' + id);
    const history = useHistory();

    const handleClick = () => {
        fetch(DATA_SERVICE_URL + '/blogs/' + blog.id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + cookies.get("jwt_authorization")
            }
        }).then(() => {
            history.push('/home');
        });
    }

    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    {isShowDeleteBtn && (<button onClick={handleClick}>Delete</button>)}
                </article>
            )}
            <div className="comments">
                <CommentList blogId={id}/>
            </div>
        </div>
    );
}

export default BlogDetails;
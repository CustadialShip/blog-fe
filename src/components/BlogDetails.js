import {useHistory, useParams} from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Cookies from "universal-cookie";

const BlogDetails = () => {
    const cookies = new Cookies();

    const {id} = useParams();
    const {data: blog, isPending, error} = useFetch('/blogs/' + id);
    const history = useHistory();

    const handleClick = () => {
      fetch('/blogs/' + blog.id, {
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
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;
const BlogList = ({blogs, handleDelete}) => {
    return (
        <div className="blog-kist">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <button onClick={() => handleDelete(blog.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default BlogList;
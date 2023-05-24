import {useState, useEffect} from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState([
        {id: 1, author: "Dima1", title: "title 1", body: "body 1"},
        {id: 2, author: "Dima2", title: "title 2", body: "body 2"},
        {id: 3, author: "Dima3", title: "title 3", body: "body 3"},
    ]);

    const handleDelete = (id) => {
        const newBlog = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlog);
    };

    useEffect(() => {
        console.log('use effect');
    }, []);

    return (
        <div className="home">
            <BlogList blogs={blogs} handleDelete={handleDelete}/>
        </div>
    );
};

export default Home;
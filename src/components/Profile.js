import {Link} from "react-router-dom";

const Profile = () => {

    const user = {
        username: 'CustadialShip',
        firstname: 'Dzmitry',
        secondname: 'Sharandzikau',
        totalBlogs: 10,
        wordNumber: 12310,
        comments: 15,
        likes: 342,
    };

    return (
        <div className="profile">
            <article>
                <h2>{user.firstname} {user.secondname}</h2>
                <p>aka {user.username}</p>
            </article>
            <div className="stats">
                <h2>Stats:</h2>
                <table>
                    <tr>
                        <td>Blogs</td>
                        <td>{user.totalBlogs}</td>
                    </tr>
                    <tr>
                        <td>Words</td>
                        <td>{user.wordNumber}</td>
                    </tr>
                    <tr>
                        <td>Comments</td>
                        <td>{user.comments}</td>
                    </tr>
                    <tr>
                        <td>Likes</td>
                        <td>{user.likes}</td>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default Profile;
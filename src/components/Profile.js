import useFetch from "../hooks/useFetch";

const Profile = () => {

    const {data: user} = useFetch('/api/v1/auth/me');
    return (
        <div className="profile">
            <article>
                <h2>{user && user.firstName} {user && user.secondName}</h2>
                <p>aka {user && user.username}</p>
            </article>
            <div className="stats">
                <h2>Stats:</h2>
                <table>
                    <tbody>
                        <tr>
                            <td>Blogs</td>
                            <td>{user && user.blogs}</td>
                        </tr>
                        <tr>
                            <td>Words</td>
                            <td>{user && user.words}</td>
                        </tr>
                        <tr>
                            <td>Comments</td>
                            <td>{user && user.comments}</td>
                        </tr>
                        <tr>
                            <td>Likes</td>
                            <td>{user && user.likes}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Profile;
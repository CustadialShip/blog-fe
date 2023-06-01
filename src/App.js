import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from "./components/Home";
import ShowNavbar from "./components/ShowNavbar";
import Create from "./components/Create";
import BlogDetails from "./components/BlogDetails";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import Signup from "./components/Signup";


function App() {
    return (
        <Router>
            <div className="App">
                <ShowNavbar>
                    <Navbar/>
                </ShowNavbar>
                <div className="content">
                    <Switch>
                        <Route exact path="/login">
                            <Login/>
                        </Route>
                        <Route exact path="/signup">
                            <Signup/>
                        </Route>
                        <Route exact path="/home">
                            <Home/>
                        </Route>
                        <Route path="/create">
                            <Create/>
                        </Route>
                        <Route path="/blogs/:id">
                            <BlogDetails/>
                        </Route>
                        <Route path="*">
                            <NotFound/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;

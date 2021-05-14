import Users from "./components/users/Users";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Posts from "./components/posts/Posts";


function App() {
    return (
        <div>
            <Router>
                <Link to={"/user"}>to users</Link>
                <hr/>
                <Link to={"/posts"}>to posts</Link>
                <Switch>
                    <Route path={"/user"} render={() => (<Users/>)}/>
                    <Route path={"/posts"} render={() => (<Posts/>)}/>
                </Switch>
            </Router>
        </div>
    );
};


export default App;
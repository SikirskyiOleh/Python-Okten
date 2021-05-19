import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Users from './components/users/Users'
import Home from "./components/home/Home";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";

function App() {
    return (
        <Router>
            <div>
                <Link to={'/'}>home</Link>
                <br/>
                <Link to={'/users'}>users </Link>
                <br/>
                <Link to={'/posts'}>posts</Link>
                <br/>
                <Link to={'/comments'}>comments</Link>
                <br/>
                <hr/>

                <Switch>

                    <Route exact path={'/'}>
                        <Home/>
                    </Route>

                    <Route path={'/users'} component={Users}/>
                    {/*add exact up
                    <Route path={'/users/:id'} component={UserDetails}/>*/
                    }

                    <Route path={'/posts'} component={Posts}/>

                    {/*<Route path={'/posts'}*/}
                    {/*       render={() => (<Posts/>)}/>*/}

                    <Route path={'/comments'} component={Comments}/>
                    <hr/>
                </Switch>

            </div>
        </Router>
    );
};

export default App;
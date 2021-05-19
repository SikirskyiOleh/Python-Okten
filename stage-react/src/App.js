import Users from "./components/users.components/users/Users";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import Posts from "./components/posts.components/posts/Posts";

function App() {
    return (
        <Router>
            <div>
                <div><Link to={'users'}>to users</Link></div>
                <div><Link to={'posts'}>to post</Link></div>

                <Switch>
                    {/*<Route path={'/users'} component={Users}/>*/}
                    {/*<Route path={'/users'} render={() => <Users/>}/>*/}

                    <Route path={'/users'}
                           render={(props) => {
                               return <Users/>;
                           }}/>

                    <Route path={'/posts'}
                           render={(props) => {
                               return <Posts/>
                           }}/>
                </Switch>

            </div>
        </Router>
    );
}

export default App;

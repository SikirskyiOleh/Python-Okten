import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Counter from "./components/counter/Counter";

function App() {
    return (
        <Router>
            <div>
                <Link to={'/'}>home</Link>
                <br/>
                <Link to={'/counter'}>Counter</Link>


                <Switch>
                    <Route path={'/counter'} component={Counter}/>
                </Switch>

            </div>
        </Router>
    );
};

export default App;
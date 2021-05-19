import {useEffect, useState} from "react";
import User from "../user/User";
import {Route, Switch} from "react-router-dom";
import UserDetails from "../user-details/UserDetails";

export default function Users(props) {

    let {match: {url}} = props;

    let [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers([...value]);
            });
    }, []);

    return (
        <div>
            {
                users.map(value => <User
                    key={value.id}
                    item={value}
                    url={url}
                />)
            }

            <Switch>
                <Route path={'/users/:id'} component={UserDetails}/>

                {/*let {match: {params: {id}}} = props;*/}
                {/*<Route path={'/users/:id'} render={() => {*/}
                {/*    return  <UserDetails key={id} id={id}/>*/}
                {/*}}/>*/}
            </Switch>

        </div>
    );
};
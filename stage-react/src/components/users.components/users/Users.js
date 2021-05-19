import {useEffect, useState} from "react";
import {getUsers} from "../../../services/api.services";
import User from "../user/User";

export default function Users() {

    let [users, setUsers] = useState([]);
    let [chosenUser, setChosenUsers] = useState(null);

    useEffect(() => {
        getUsers().then(value => setUsers([...value.data]));
    }, []);

    const choseUser = (id) => setChosenUsers(users.find(value => value.id === id));


    return (
        <div>
            <div>
                {
                    users.map(value => <User
                        choseUser={choseUser}
                        key={value.id}
                        item={value}/>)
                }
            </div>

            <div>
                {
                    chosenUser && <div>{chosenUser.id} - {chosenUser.email}</div>
                }
            </div>
        </div>
    );
}
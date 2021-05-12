import {useState} from "react";
import User from "./components/user/User";

let usersList = [{name: 'oleh', age: 12, status: true},
    {name: 'vova', age: 50, status: true},
    {name: 'nastya', age: 22, status: true},
    {name: 'roman', age: 45, status: false},
    {name: 'max', age: 72, status: true},
    {name: 'vika', age: 2, status: false}];


function App() {

    let [counter, setCounter] = useState(0);
    const increment = () => setCounter(++counter);

    let [users, setUsers] = useState(usersList);

    const deleteUser = () => {
        users.pop();
        setUsers([...users]);
    }

    return (
        <div>
            <div>
                counter is {counter}
                <button onClick={increment}>Increment</button>
            </div>

            <div>
                {users.map((value, index) =>
                    <User key={index}
                          {...value}
                    />
                )
                }
                <button onClick={deleteUser}>Delete</button>
            </div>
        </div>
    );
};

export default App;

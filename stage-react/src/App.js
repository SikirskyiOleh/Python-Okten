import {useState} from "react";
import Users from "./components/users/Users";


function App() {

    let [counter, setCounter] = useState(0);
    const increment = () => setCounter(++counter);
    const decrement = () => setCounter(--counter);
    const reset = () => setCounter(0);


    return (
        <div>

            <div>
                counter is {counter}
                <br/>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={reset}>Reset</button>
            </div>

            <h1></h1>

            <div>
                <Users/>

            </div>

        </div>
    );
};

export default App;

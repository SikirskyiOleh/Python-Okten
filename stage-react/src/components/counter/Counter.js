import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

export default function Counter() {
    // const [counter, setCounter] = useState(0);
    // const incCounter = () => {
    //     setCounter(counter + 1);
    // }

    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();

    const incCounter = () => {
        dispatch({type: "INC"})
    }
    return (
        <div>
            <h3>Counter: {counter}</h3>

            <button onClick={incCounter}>Inc</button>
            <button>Dec</button>
            <button>Reset</button>
        </div>
    )
};
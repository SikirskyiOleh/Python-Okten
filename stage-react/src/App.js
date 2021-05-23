import {useDispatch, useSelector} from "react-redux";
import React, {useState} from "react";
import "./index"

const Counter = () => {

    const counter = useSelector(({counter}) => counter);

    return (
        <>
            <h1>counter: {counter}</h1>
        </>
    )
}


export default function App() {

    const dispatch = useDispatch();
    const [isOn, setIsOn] = useState(true);
    const [value, setValue] = useState(0);


    return (
        <div>
            {isOn && <Counter/>}

            <button onClick={() => {
                setIsOn(prev => !prev)
            }}>toggle
            </button>

            <button onClick={() => {
                dispatch({type: "INC"})
            }}>inc
            </button>

            <button onClick={() => {
                dispatch({type: "DEC"})
            }}>dec
            </button>

            <button onClick={() => {
                dispatch({type: "RESET"})
            }}>reset
            </button>

            <input type={"number"} value={value} onChange={({target: {value}}) => {
                setValue(value);
            }}/>

            <button onClick={() => {
                dispatch({type: "INC_CUSTOM", payload: Number(value)})
            }}>inc custom
            </button>

        </div>
    );
};
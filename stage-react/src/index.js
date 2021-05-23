import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux";
import {Provider} from "react-redux";

const initialState = {
    counter: 0,
    counter2: 0
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case "INC": {
            return {
                ...state,
                counter: state.counter + 1
            }
        }
        case "DEC": {
            return {
                ...state,
                counter: state.counter - 1
            }
        }
        case "RESET": {
            return {
                ...state,
                counter: 0
            }
        }
        case "INC_CUSTOM": {
            return {
                ...state,
                counter: state.counter + action.payload
            }
        }
        default:
            return state;
    }
}


const store = createStore(reducer);


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

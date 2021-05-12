import User from "../user/User";
import {useState} from "react";


export default function Users() {

    let [users, setUsers] = useState([
        {
            id: 1,
            name: "Leanne Graham",
            age: 22,
            address: {street: "Kulas Light", city: "Gwenborough", zipcode: "92998-3874"}
        },
        {
            id: 2,
            name: "Ervin Howell",
            age: 12,
            address: {street: "Victor Plains", city: "Wisokyburgh", zipcode: "90566-7771"}
        },
        {
            id: 3,
            name: "Clementine Bauch",
            age: 33,
            address: {street: "Douglas Extension", city: "McKenziehaven", zipcode: "59590-4157"}
        },
        {
            id: 4,
            name: "Patricia Lebsack",
            age: 44,
            address: {street: "Hoeger Mall", city: "South Elvis", zipcode: "53919-4257"}
        },
        {
            id: 5,
            name: "Chelsey Dietrich",
            age: 67,
            address: {street: "Skiles Walks", city: "Roscoeview", zipcode: "33263"}
        },
        {
            id: 6,
            name: "Mrs. Dennis Schulist",
            age: 30,
            address: {street: "Norberto Crossing", city: "South Christy", zipcode: "23505-1337"}
        },
        {
            id: 7,
            name: "Kurtis Weissnat",
            age: 55,
            address: {street: "Rex Trail", city: "Howemouth", zipcode: "58804-1099"}
        },
        {
            id: 8,
            name: "Nicholas Runolfsdottir V",
            age: 20,
            address: {street: "Ellsworth Summit", city: "Aliyaview", zipcode: "45169"}
        },
        {
            id: 9,
            name: "Glenna Reichert",
            age: 29,
            address: {street: "Dayna Park", city: "Bartholomebury", zipcode: "76495-3109"}
        },
        {
            id: 10,
            name: "Clementina DuBuque",
            age: 48,
            address: {street: "Kattie Turnpike", city: "Lebsackbury", zipcode: "31428-2261"}
        }
    ]);

    const popUser = () => {
        users.pop();
        setUsers([...users]);
    };


    return (
        <div>
            {users.map(value => <User key={value.id} item={value}/>)
            }
            <button onClick={popUser}>Pop User</button>
        </div>
    );
}
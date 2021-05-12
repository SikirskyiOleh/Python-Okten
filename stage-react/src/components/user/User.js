
export default function User(props) {
    let {name, age, status} = props;

    return (
        <div>
            <h2>{name} {age}</h2>
            <p>{status.toString()}</p>
        </div>
    );
}
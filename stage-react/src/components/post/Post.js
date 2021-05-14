export default function Post({item, search}) {
    return (
        <div>
            {item.id} --
            {item.body}
            <button onClick={() => search(item.id)}>Details</button>
        </div>
    );
};
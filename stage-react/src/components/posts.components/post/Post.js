export default function Post({item, chosePost}) {
    return (
        <div>
            <div>{item.title}</div>
            <button onClick={() => chosePost(item.id)}>Details</button>
        </div>
    );
};
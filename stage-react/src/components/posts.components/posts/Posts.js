import {useEffect, useState} from "react";
import {getPosts} from "../../../services/api.services";
import Post from "../post/Post";

export default function Posts() {

    let [posts, setPosts] = useState([]);
    let [chosenPosts, setChosenPosts] = useState(null);

    useEffect(() => {
        getPosts().then(value => setPosts([...value.data]));
    }, []);

    const chosePost = (id) => setChosenPosts(posts.find(value => value.id === id));

    return (
        <div>
            <div>
                {
                    posts.map(value => <Post
                        chosePost={chosePost}
                        key={value.id}
                        item={value}
                    />)
                }
            </div>

            <div>
                {
                    chosenPosts && <div>{chosenPosts.id} - {chosenPosts.body}</div>
                }
            </div>
        </div>
    );
};
import {useEffect, useState} from "react";
import axiosInstance from '../../services/api';
import Post from "../post/Post";
import './posts.css'

export default function Posts() {

    let [posts, setPosts] = useState([]);
    let [singlePosts, setSinglePosts] = useState(null);

    useEffect(() => {
        axiosInstance.get('/posts')
            .then(value => setPosts([...value.data]));
    }, []);

    const search = (userId) => {
        let findPost = posts.find(value => value.id === userId);
        setSinglePosts(findPost);
    }

    return (
        <div className={"wrap"}>

            <div className={'posts-box'}>
                {
                    posts.map((value) => <Post
                        key={value.id}
                        item={value}
                        search={search}/>)
                }
            </div>

            <div className={'single-post-box'}>
                {
                    singlePosts ? (<h2>{singlePosts.title}</h2>) : (<div>Post not defined</div>)
                }
            </div>

        </div>
    );
};
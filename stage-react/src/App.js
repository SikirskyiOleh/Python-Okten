import {useDispatch, useSelector} from "react-redux";
import {useCallback, useEffect} from "react";
import {
    setPosts,
    startPostsLoading,
    stopPostsLoading,
    setPostsError,
} from "./components/redux";
import {
    useSetComments,
    useSetCommentsError, useSetTodos, useSetTodosError,
    useStartCommentsLoading, useStartTodosLoading,
    useStopCommentsLoading, useStopTodosLoading
} from "./components/redux/hooks";


const Posts = () => {
    const data = useSelector(({posts}) => posts);
    const dispatch = useDispatch();

    const postsFetcher = async () => {
        try {
            dispatch(startPostsLoading());
            const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await resp.json();

            dispatch(setPosts(data));
            dispatch(stopPostsLoading());

        } catch (e) {
            console.log(e);
            dispatch(setPostsError('failed to fetch'))
        } finally {
            dispatch(stopPostsLoading());
        }
    }

    useEffect(() => {
        postsFetcher();
    }, []);

    if (data.error) {
        return (
            <h1>{data.error}</h1>
        )
    }

    if (data.isPostsLoading) {
        return (
            <h1>owhoeть!</h1>
        )
    }

    return (
        <div>
            {
                data.posts.map(({id, title, body}) => (
                    <p key={id}>
                        {title} ---- {body}
                    </p>)
                )
            }
        </div>
    );
};

const Comments = () => {
    const setComments = useSetComments();
    const setCommentsError = useSetCommentsError();
    const startCommentsLoading = useStartCommentsLoading();
    const stopCommentsLoading = useStopCommentsLoading();

    const data = useSelector(({comments}) => comments);
    const dispatch = useDispatch();

    const commentsFetcher = async () => {
        try {
            startCommentsLoading();
            const resp = await fetch('https://jsonplaceholder.typicode.com/comments');
            const data = await resp.json();

            setComments(data);
            stopCommentsLoading();
        } catch (e) {
            console.log(e);
            setCommentsError('failed to fetch');
        } finally {
            stopCommentsLoading();
        }
    }

    useEffect(() => {
        commentsFetcher();
    }, []);

    if (data.error) {
        return (
            <h1>{data.error}</h1>
        )
    }

    if (data.isCommentsLoading) {
        return (
            <h1>owhoeть!</h1>
        )
    }

    return (
        <div>
            {
                data.comments.map(({id, name, body}) => (
                    <p key={id}>
                        {name} ---- {body}
                    </p>)
                )
            }
        </div>
    );
};

const Todos = () => {
    const setTodos = useSetTodos();
    const setTodosError = useSetTodosError();
    const startTodosLoading = useStartTodosLoading();
    const stopTodosLoading = useStopTodosLoading();

    const data = useSelector(({todos}) => todos);
    const dispatch = useDispatch();

    const todosFetcher = async () => {
        try {
            startTodosLoading();
            const resp = await fetch('https://jsonplaceholder.typicode.com/todos');
            const data = await resp.json();

            setTodos(data);
            stopTodosLoading();
        } catch (e) {
            console.log(e);
            setTodosError("Failed");
        } finally {
            stopTodosLoading();
        }
    }
    useEffect(() => {
        todosFetcher()
    }, []);

    if (data.error) {
        return (
            <h1>{data.error}</h1>
        )
    }

    if (data.isTodosLoading) {
        return (
            <h1>owhoeть!</h1>
        )
    }

    return (
        <div>
            {
                data.todos.map(({id, title, completed}) => (
                    <p key={id}>
                        {title} --- {completed.toString()}
                    </p>)
                )
            }
        </div>)
};

export default function App() {
    return (
        <div>
            Owhoеть
            {/*<Posts/>*/}
            {/*<Comments/>*/}
            <Todos/>
        </div>
    );
};
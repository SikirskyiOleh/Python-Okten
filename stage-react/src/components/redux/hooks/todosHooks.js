import {useDispatch} from "react-redux";
import {useCallback} from "react";
import {setTodos, setTodosError, startTodosLoading, stopTodosLoading} from "../action-creators";

export const useSetTodos = () => {
    const dispatch = useDispatch();
    const fetcher = useCallback((payload) => dispatch(setTodos(payload))
        , [dispatch]);
    return fetcher;

}

export const useSetTodosError = () => {
    const dispatch = useDispatch();
    const fetcher = useCallback((payload) => dispatch(setTodosError(payload))
        , [dispatch]);
    return fetcher;
}

export const useStartTodosLoading = () => {
    const dispatch = useDispatch();
    const fetcher = useCallback(() => dispatch(startTodosLoading())
        , [dispatch]);
    return fetcher;
}

export const useStopTodosLoading = () => {
    const dispatch = useDispatch();
    const fetcher = useCallback(() => dispatch(stopTodosLoading())
        , [dispatch]);
    return fetcher;
}
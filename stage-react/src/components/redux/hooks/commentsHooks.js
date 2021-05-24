import {useDispatch} from "react-redux";
import {useCallback} from "react";
import {setComments, setCommentsError, startCommentsLoading, stopCommentsLoading} from "../action-creators";

export const useSetComments = () => {
    const dispatch = useDispatch();
    const fetcher = useCallback((payload) => dispatch(setComments(payload))
        , [dispatch]);
    return fetcher;
}

export const useSetCommentsError = () => {
    const dispatch = useDispatch();
    const fetcher = useCallback((payload) => dispatch(setCommentsError(payload))
        , [dispatch]);
    return fetcher;
}

export const useStartCommentsLoading = () => {
    const dispatch = useDispatch();
    const fetcher = useCallback(() => dispatch(startCommentsLoading())
        , [dispatch]);
    return fetcher;
}

export const useStopCommentsLoading = () => {
    const dispatch = useDispatch();
    const fetcher = useCallback(() => dispatch(stopCommentsLoading())
        , [dispatch]);
    return fetcher;
}
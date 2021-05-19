import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

const getUsers = () => {
    return axiosInstance.get('/users');

};

const getUser = (id) => {
    return axiosInstance.get('/users' + id);
};

const getPosts = () => {
    return axiosInstance.get('/posts');

};

const getPost = (id) => {
    return axiosInstance.get('/post' + id);
}


export {
    getUser, getUsers, getPosts, getPost, axiosInstance
}
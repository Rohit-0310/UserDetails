import * as types from "./actionType";
import axios from "axios";


const getUsers = (users) => ({
    type: types.GET_USERS,
    payload: users,
})

const userDeleted = () => ({
    type: types.DELETE_USER
})

const userAdded = () => ({
    type: types.ADD_USER
})

const getOneUser = (user) => ({
    type: types.GET_SINGLE_USER,
    payload: user,
})

const userEdited = () => ({
    type: types.EDIT_USER
})


export const loadUsers = () => {
    return function (dispatch) {
        axios
        .get(`https://user-detailddb.herokuapp.com/user`)
        .then((resp) => {
            dispatch(getUsers(resp.data));
            console.log("res",resp)

        })
        .catch((err) => console.log("err", err));
    };
};


export const deleteUser = (id) => {
    return function (dispatch) {
        axios
            .delete(`https://user-detailddb.herokuapp.com/user/${id}`)
            .then((resp) => {
                dispatch(userDeleted());
                dispatch(loadUsers());
                console.log("res",resp)
                
            })
            .catch((err) => console.log("err", err));
    };
};


export const addUser = (user) => {
    return function (dispatch) {
        axios
            .post(`https://user-detailddb.herokuapp.com/user`, user)
            .then((resp) => {
                dispatch(userAdded());
                console.log("res",resp)
                
                
            })
            .catch((err) => console.log("err", err));
    };
};

export const editUser = (user,id) => {
    return function (dispatch) {
        axios
            .put(`https://user-detailddb.herokuapp.com/user/${id}`, user)
            .then((resp) => {
                dispatch(userEdited());
                console.log("res",resp)
                
            })
            .catch((err) => console.log("err", err));
    };
};

export const getSingleUser = (id) => {
    return function (dispatch) {
        axios
            .get(`https://user-detailddb.herokuapp.com/user/${id}`)
            .then((resp) => {
                dispatch(getOneUser(resp.data));
                console.log("res",resp)
                
            })
            .catch((err) => console.log("err", err));
    };
};


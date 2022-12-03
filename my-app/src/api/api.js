import axios from "axios";
import {localStorage} from "../redux/redux-store";

const instance = axios.create({
    baseURL: "http://127.0.0.1:8087/",
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0IiwiZXhwIjoxNjcwMTAxMjAwfQ.wV4ZKYqN2yItjzOAU845O__r2ffhQETyxT4hh6rR567empKQOdgL2EHBpDfAVqBSV0rw3kzvF50SYDFvb9aJSA',
        'Content-Type': 'application/json',
    }
});

export const usersAPI = {
    unfollow(id) {
        return instance.get(`users/unfollow/${id}`)
            .then(response => {
                return {data: response.data, status: response.status}
            })
    },
    follow(id) {
        return instance.get(`users/follow/${id}`)
            .then(response => {
                return {data: response.data, status: response.status}
            })
    },
    myProfile() {
        return instance.get(`profile/me`)
            .then(response => {
                return {data: response.data}
            })
    },
    getProfile(userId) {
        return instance.get(`profile/get/${userId}`)
            .then(response => {
                return {data: response.data}
            })
    },
    getUsersPage(currentPage, pageSize) {
        return instance.get(`users/page?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return {
                    followers: response.data.followers,
                    count: response.data.count
                }
            })
    },
    getNewUsersPage(page, pageSize) {
        return instance.get(`users/page?page=${page}&count=${pageSize}`)
            .then(response => {
                return { followers: response.data.followers }
            })
    }

}

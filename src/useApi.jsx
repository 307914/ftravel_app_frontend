import React, { useState } from 'react'
import { axiosInstance } from './axiosInstance';

const UseApi = (url, type) => {
    const [data, setData] = useState([]);

    const makeRequest = async (payload) => {
        try {
            const data = (await axiosInstance[type](url, payload)).data;
            setData(data);
        } catch (error) {
            console.log("error in the makerequest", error);
        }
    }

    return { makeRequest, data }
}
export default UseApi

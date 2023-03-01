import axios from 'axios';
import { NavigateFunction } from 'react-router-dom';
import {  BACKEND_URL } from '../../constants/ApiEndPoints';


const makeRequest = async (
    apiEndpoint: { url: string, method: string },
    dynamicConfig = {},
    navigate?: NavigateFunction
) => {

    try {
        const requestDetails = {
            baseURL: BACKEND_URL,
            url: apiEndpoint.url,
            method: apiEndpoint.method,
            ...dynamicConfig
        };

        const { data } = await axios(requestDetails);
        return data;
    }

    catch (error: any) {
        if (navigate) {
            navigate('/error');
        }
    }
};

export default makeRequest;

import { AxiosError } from "axios";
import { getJWT } from "../../utils/localStorage";
import instance from "../api";

interface ChangePasswordData {
    "password":string,
    "new_password":string
}

export const whoImIApi = async () =>{
    instance.interceptors.request.use(
        (config) =>{
            const accessToken = getJWT();
            if (accessToken){
                config.headers.Authorization = `Bearer ${accessToken}`
            }
            return config
        },
        (error) =>{
            return Promise.reject(error);
        }
    );
    
    try {
        const response = await instance.get(`/v1/client/user/whoami`);
        const serviceResponse = response.data;
        return serviceResponse;
    } catch (error) {
        const errors = error as AxiosError;
        if (errors.response) {
            console.log("apiHttp -> error.response", errors.response)
        } else {
            console.log("apiHttp -> error", error)
        }
        return errors.response
    }
};

export const getBalanceApi = async() =>{
    instance.interceptors.request.use(
        (config) =>{
            const accessToken = getJWT();
            if (accessToken){
                config.headers.Authorization = `Bearer ${accessToken}`
            }
            return config
        },
        (error) =>{
            return Promise.reject(error);
        }
    );

    try {
    const response = await instance.get(`/v1/client/user/balance`);
    const serviceResponse = response.data;
    return serviceResponse;
    } catch (error) {
        const errors = error as AxiosError;
        if (errors.response) {
            console.log("apiHttp -> error.response", errors.response)
        } else {
            console.log("apiHttp -> error", error)
        }
        return errors.response
    }
};

export const findUserApi = async(account_number:string) =>{
    instance.interceptors.request.use(
        (config) =>{
            const accessToken = getJWT();
            if (accessToken){
                config.headers.Authorization = `Bearer ${accessToken}`;
            }
            return config
        },
        (error) =>{
            return Promise.reject(error);
        }
    );

    try {
        const response = await instance.get(`/v1/client/user/account/`, {params:{account_number:account_number}});
        const serviceResponse = response.data;
        return serviceResponse;
    } catch (error) {
        const errors = error as AxiosError;
        if (errors.response) {
            console.log("apiHttp -> error.response", errors.response)
        } else {
            console.log("apiHttp -> error", error)
        }
        return errors.response
    }
};

export const changePasswordApi = async(changePasswordInfo:ChangePasswordData) =>{
    instance.interceptors.request.use(
        (config) =>{
            const accessToken = getJWT();
            if (accessToken){
                config.headers.Authorization = `Bearer ${accessToken}`;
            }
            return config
        },
        (error) =>{
            return Promise.reject(error);
        }
    );

    try {
        const response = await instance.patch(`/v1/client/user/password`, changePasswordInfo);
        const serviceResponse = response.data;
        return serviceResponse;
    } catch (error) {
        const errors = error as AxiosError;
        if (errors.response) {
            console.log("apiHttp -> error.response", errors.response)
        } else {
            console.log("apiHttp -> error", error)
        }
        return errors.response
    }
};
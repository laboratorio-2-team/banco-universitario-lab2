import { AxiosError } from "axios";
import { getJWT } from "../../utils/localStorage";
import instance from "../api";

interface TransferData{
    "amount":number,
    "account_number":string,
    "description":string
}

export const getMovementsApi = async(page:number, page_size:number, multiplier?:number) =>{
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
        let params;
        if (multiplier){
            params = {page:page, page_size:page_size, multiplier:multiplier};
        }
        else {
            params = {page:page, page_size:page_size};
        }
        const response = await instance.get(`/v1/client/movement`, {params:params});
        const serviceResponse = response;
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

export const createTransferApi = async(transferInfo:TransferData) =>{
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
        const response = await instance.post(`/v1/client/movement`, transferInfo);
        const serviceResponse = response.data;
        return serviceResponse;
    } catch (error) {
        const errors = error as AxiosError;
        if (errors.response) {
            console.log("apiHttp -> error.response", errors.response)
        } else {
            console.log("apiHttp -> error", error)
        }
        return null
    }
}
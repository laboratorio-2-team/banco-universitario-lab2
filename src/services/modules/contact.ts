import { AxiosError } from "axios";
import { getJWT } from "../../utils/localStorage";
import instance from "../api";
interface ContactData{
    "alias":string,
    "account_number":string,
    "description":string
}
interface UContactData{
    "alias":string,
    "description":string
}
export const createContactApi = async(contactInfo:ContactData) =>{
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
        const response = await instance.post(`/v1/client/contact`, contactInfo);
        const serviceResponse = response.data;
        return serviceResponse
    } catch (error) {
        const errors = error as AxiosError;
        if (errors.response) {
            console.log("apiHttp -> error.response", errors.response)
        } else {
            console.log("apiHttp -> error", error)
        }
        return null
    }
};

export const updateContactApi = async(contactInfo:UContactData, id:number)=>{
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
        const response = await instance.patch(`/v1/client/contact`, contactInfo, {params:{id:id}});
        const serviceResponse = response.data;
        return serviceResponse
    } catch (error) {
        const errors = error as AxiosError;
        if (errors.response) {
            console.log("apiHttp -> error.response", errors.response)
        } else {
            console.log("apiHttp -> error", error)
        }
        return null
    }
};

export const deleteContactApi = async(id:number) =>{
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
        const response = await instance.delete(`/v1/client/contact`, {params:{id:id}});
        const serviceResponse = response.data;
        return serviceResponse
    } catch (error) {
        const errors = error as AxiosError;
        if (errors.response) {
            console.log("apiHttp -> error.response", errors.response)
        } else {
            console.log("apiHttp -> error", error)
        }
        return null
    }
};

export const getContact = async(id:number) =>{
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
        const response = await instance.get(`/v1/client/contact`, {params:{id:id}});
        const serviceResponse = response.data;
        return serviceResponse
    } catch (error) {
        const errors = error as AxiosError;
        if (errors.response) {
            console.log("apiHttp -> error.response", errors.response)
        } else {
            console.log("apiHttp -> error", error)
        }
        return null
    }
};

export const getContacts = async(page:number, page_size:number) =>{
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
        const response = await instance.get(`/v1/client/contact`, {params:{page:page, page_size:page_size}});
        const serviceResponse = response.data;
        const headersResponse = response.headers;
        return {serviceResponse, headersResponse}
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
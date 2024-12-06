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
        return errors.response
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
        return errors.response
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
        return errors.response
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
        return errors.response
    }
};

export const getContacts = async(page:number, page_size:number, alias?:string) =>{
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
    let params;
    if (alias) {
        params = {page:page, page_size:page_size, alias:alias}
    }
    else {
        params = {page:page, page_size:page_size}
    }
    try {
        const response = await instance.get(`/v1/client/contact`, {params:params});
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
}
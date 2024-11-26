import { AxiosError, AxiosResponse } from "axios";
import instance from "../api";
import { setJWT } from "../../utils/localStorage";
interface LoginData {
  email: string;
  password: string;
}
interface RegisterData {
  first_name: string;
  last_name: string;
  document_number: string;
  birth_date: string;
  phone_number: string;
  email: string;
  password: string;
}
export const loginApi = async (loginInfo: LoginData) => {
  try {
    const response: AxiosResponse = await instance.post(
      `/v1/public/client/user/login`,
      loginInfo
    );
    const serviceResponse = response.data;
    setJWT(response.data.data.jwt);
    return serviceResponse;
  } catch (error) {
    const errors = error as AxiosError;
    if (errors.response) {
      console.log("apiHttp -> error.response", errors.response);
    } else {
      console.log("apiHttp -> error", error);
    }
    return errors.response;
  }
};

export const registerApi = async (registerInfo: RegisterData) => {
  try {
    const response: AxiosResponse = await instance.post(
      `/v1/public/client/user/register`,
      registerInfo
    );
    const serviceResponse = response.data;
    return serviceResponse;
  } catch (error) {
    const errors = error as AxiosError;
    if (errors.response) {
      console.log("apiHttp -> error.response", errors.response);
    } else {
      console.log("apiHttp -> error", error);
    }
    return errors.response;
  }
};

import { AxiosResponse } from "axios";
import instance from "../api";
import {
  AuthResponse,
  LoginParam,
  RegisterParam,
} from "@interfaces/auth.interface";
import { setJWT } from "@services/localStorage.service";

export const loginApi = async (loginInfo: LoginParam) => {
  const response: AxiosResponse<AuthResponse> = await instance.post(
    `/v1/public/client/user/login`,
    loginInfo
  );
  const serviceResponse = response.data;
  setJWT(response.data.data.jwt);
  return serviceResponse;
};

export const registerApi = async (registerInfo: RegisterParam) => {
  const response: AxiosResponse<AuthResponse> = await instance.post(
    `/v1/public/client/user/register`,
    registerInfo
  );
  const serviceResponse = response.data;
  return serviceResponse;
};

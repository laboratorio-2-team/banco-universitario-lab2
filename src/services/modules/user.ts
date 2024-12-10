import instance from "../api";
import { BalanceResponse, UserResponse } from "@interfaces/auth.interface";
import { ResponseInterface } from "@interfaces/response.interface";
import { getJWT } from "@services/localStorage.service";

interface ChangePasswordData {
  password: string;
  new_password: string;
}

export const whoImIApi = async () => {
  instance.interceptors.request.use(
    (config) => {
      const accessToken = getJWT();
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const response = await instance.get<UserResponse>(`/v1/client/user/whoami`);
  return response.data;
};

export const getBalanceApi = async () => {
  instance.interceptors.request.use(
    (config) => {
      const accessToken = getJWT();
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const response = await instance.get<BalanceResponse>(
    `/v1/client/user/balance`
  );
  const serviceResponse = response.data;
  return serviceResponse;
};

export const findUserApi = async (account_number: string) => {
  instance.interceptors.request.use(
    (config) => {
      const accessToken = getJWT();
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const response = await instance.get<UserResponse>(
    `/v1/client/user/account/${account_number}`,
  );
  const serviceResponse = response.data;
  return serviceResponse;
};

export const changePasswordApi = async (
  changePasswordInfo: ChangePasswordData
) => {
  instance.interceptors.request.use(
    (config) => {
      const accessToken = getJWT();
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const response = await instance.patch<ResponseInterface<null>>(
    `/v1/client/user/password`,
    changePasswordInfo
  );
  return response.data;
};

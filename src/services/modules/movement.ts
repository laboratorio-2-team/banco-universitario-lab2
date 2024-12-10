import instance from "../api";
import {
  GetMovementsParams,
  ResponseMovements,
  ResponseTransfer,
  TransferParams,
} from "@interfaces/movements.interface";
import { getJWT } from "@services/localStorage.service";

export const getMovementsApi = async (
  movementsParams: GetMovementsParams
) => {
  const { page, page_size, multiplier } = movementsParams;

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

  let params;
  if (multiplier) {
    params = { page: page, page_size: page_size, multiplier: multiplier };
  } else {
    params = { page: page, page_size: page_size };
  }
  const response = await instance.get<ResponseMovements>(
    `/v1/client/movement`,
    {
      params: params,
    }
  );
  const serviceResponse = response;
  return serviceResponse;
};

export const createTransferApi = async (transferInfo: TransferParams) => {
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

  const response = await instance.post<ResponseTransfer>(
    `/v1/client/movement`,
    transferInfo
  );
  const serviceResponse = response.data;
  return serviceResponse;
};

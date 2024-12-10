import { getJWT } from "@services/localStorage.service";
import instance from "../api";
import {
  ContactResponse,
  CreateContactParam,
  UpdateContactParam,
  ContactListResponse,
  GetContactsListParam,
} from "@interfaces/contact.interface";

export const createContactApi = async (contactInfo: CreateContactParam) => {
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

  const response = await instance.post<ContactResponse>(
    `/v1/client/contact`,
    contactInfo
  );
  const serviceResponse = response.data;
  return serviceResponse;
};

export const updateContactApi = async (contactInfo: UpdateContactParam) => {
  const { id, ...infoContact } = contactInfo;

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

  const response = await instance.patch<ContactResponse>(
    `/v1/client/contact/${id}`,
    infoContact
  );
  const serviceResponse = response.data;
  return serviceResponse;
};

export const deleteContactApi = async (id: number) => {
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

  const response = await instance.delete<ContactResponse>(
    `/v1/client/contact/${id}`,
  );
  const serviceResponse = response.data;
  return serviceResponse;
};

export const getContact = async (id: number) => {
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
  console.log(id);
  const response = await instance.get<ContactResponse>(`/v1/client/contact`, {
    params: { id: id },
  });
  const serviceResponse = response.data;
  return serviceResponse;
};

export const getContacts = async (contactsParama: GetContactsListParam) => {
  const { page, page_size, alias } = contactsParama;

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
  if (alias) {
    params = { page: page, page_size: page_size, alias: alias };
  } else {
    params = { page: page, page_size: page_size };
  }

  const response = await instance.get<ContactListResponse>(
    `/v1/client/contact`,
    {
      params: params,
    }
  );
  const serviceResponse = response;
  return serviceResponse;
};

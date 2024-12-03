import { Schema, object, string, ref } from "yup";

export interface FromRegister {
  first_name: string;
  last_name: string;
  document_number: string;
  birth_date: string;
  phone_number: string;
  email: string;
  password: string;
  confirm: string;
}

export const initialValuesRegister: FromRegister = {
  first_name: "",
  last_name: "",
  document_number: "",
  birth_date: "",
  phone_number: "",
  email: "",
  password: "",
  confirm: ""
};

export const validationSchemaRegister: Schema = object({
  first_name: string().min(2).required("Requerido"),
  last_name: string().min(2).required("Requerido"),
  document_number: string()
    .min(6)
    .test((value) => {
      if (value) return /^[0-9]*$/.test(value);
    })
    .required("Requerido"),
  birth_date: string()
    .test((value) => {
      if (value)
        return /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/.test(value);
    })
    .required("Requerido"),
  phone_number: string()
    .min(2)
    .test((value) => {
      if (value) return /^\+?[0-9]*$/.test(value);
    }),
  email: string().email().required("Requerido"),
  password: string().min(8).required("Requerido"),
  confirm: string().oneOf([ref("password")]).required("Requerido")
});

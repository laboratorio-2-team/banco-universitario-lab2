import { object, ref, Schema, string } from "yup";

export interface FromPassword {
    password:string,
    new_password:string,
    confirm:string
}

export const initialValuesPassword: FromPassword = {
    password: "",
    new_password: "",
    confirm: ""
};

export const validationSchemaPassword: Schema = object({
    password: string().min(8).required("Requerido"),
    new_password: string().min(8).required("Requerido"),
    confirm: string().min(8).oneOf([ref("new_password")]).required("Requerido")
});
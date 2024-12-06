import { object, Schema, string } from "yup";

export interface FromCreateContact {
    alias:string,
    account_number:string,
    description:string
}

export const initialValuesContact: FromCreateContact = {
    alias: "",
    account_number: "",
    description: ""
};

export const validationSchemaContact: Schema = object({
    alias: string().min(2).required("requerido"),
    account_number: string().min(20).test((value) => {
        if(value) return /^[0-9]{20}$/.test(value)
    }).required("Requerido"),
    description: string().min(2).required("Requerido")
});
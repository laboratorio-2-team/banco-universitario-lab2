import { TransferParams } from "@interfaces/movements.interface";
import { number, object, Schema, string } from "yup";

export const initialValuesTransfer: TransferParams = {
    amount: 0,
    account_number: "",
    description: ""
};

export const validationSchemaTransfer: Schema = object({
    amount: number().positive().required("Requerido"),
    account_number: string().min(20).test((value) => {
        if(value) return /^[0-9]{20}$/.test(value)
    }).required("Requerido"),
    description: string().min(2).required("Requerido")
});
import { number, object, Schema, string } from "yup";

export const validationSchemaEdit : Schema = object({
    alias: string().min(2).required("Requerido"),
    description: string().min(2).required("Requerido"),
    id: number()
});
import { Schema, object, string } from 'yup';


export interface FromValues {
    email: string;
    password: string;
}


export const initialValues: FromValues = {
    email: '',
    password: '',
}

export const validationSchema: Schema = object({
    password: string().min(8).required(),
    email: string().email().required(),
})
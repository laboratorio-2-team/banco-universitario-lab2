import { TextField } from '@mui/material';
import { FormikHelpers, useFormik } from 'formik'
import { ButtonDemo } from '../ButtonDemo';
import { FromValues, initialValues, validationSchema } from '../../schemas';

const onSubmit = (values: FromValues, formikHelpers: FormikHelpers<FromValues>) => {
    console.log(values);
    formikHelpers.resetForm();
}

export const Form = () => {

    const { errors, touched, values, handleSubmit,  handleBlur, handleChange } = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    });

    const { email, password } = values;


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    id='email'
                    label='Email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                />

                <TextField
                    fullWidth
                    id='password'
                    label='Password'
                    name='password'
                    type='password'
                    value={password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
                />
            </form>

            <ButtonDemo fullWidth
             variant='contained'
             type='submit'
             >
                Submit
             </ButtonDemo>
        </div>
    )
}

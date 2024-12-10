import { Box, Button, Paper, Snackbar, SnackbarCloseReason, TextField, Typography } from "@mui/material"
import { useTheme } from "styled-components"
import { FromPassword, initialValuesPassword, validationSchemaPassword } from "../../../schemas";
import { FormikHelpers, useFormik } from "formik";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/store";
import { AuthState } from "@interfaces/auth.interface";
import { changePasswordAsync } from "@store/async";
import { LoadingStatesEnum } from "@config/constants";
export const ChangePassword = () => {
    const theme = useTheme();
    const [messageState, setMessageState] = useState(false);
    const [message, setMessage] = useState("");
    const dispatch = useDispatch<AppDispatch>();
    const { status } = useSelector<RootState>((state) => state.auth) as AuthState;
    const handleClose = (event: React.SyntheticEvent | Event, reason: SnackbarCloseReason) => {
        console.log({ event, reason });

        setMessageState(false);
    };

    const onSubmit = async (values: FromPassword, formikHelpers: FormikHelpers<FromPassword>) => {
        if (!errors.password && !errors.new_password && !errors.confirm) {
            formikHelpers.resetForm();
            const apiValues = { password: values.password, new_password: values.new_password };
            await dispatch(changePasswordAsync(apiValues));
            console.log(status);
            if (status === LoadingStatesEnum.SUCCEEDED) {
                setMessage("Contraseña cambiada con éxito")
            }
            else {
                setMessage("Error al cambiar contraseña");
            }
            setMessageState(true);
        }
    };
    const { errors, touched, values, handleSubmit, handleBlur, handleChange } = useFormik<FromPassword>({
        initialValues: initialValuesPassword,
        validationSchema: validationSchemaPassword,
        onSubmit
    });
    return (
        <Paper className="!w-2/3 !h-[460px] !justify-center ml-[16vw]">
            <Typography className="py-8 !ml-8" fontFamily={theme.typography.fontFamily} color={"#333B69"} align="left">
                Cambiar Contraseña
            </Typography>
            <Box >
                <form onSubmit={handleSubmit}>
                    <TextField className="!flex w-[20vw] !my-4 !ml-8"
                        label="Contraseña Anterior"
                        type="password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.password && Boolean(errors.password?.length)}
                        helperText={errors.password}
                        required
                    />
                    <TextField className="!flex w-[20vw] !my-4 !ml-8"
                        label="Nueva Contraseña"
                        type="password"
                        name="new_password"
                        value={values.new_password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.new_password && Boolean(errors.new_password?.length)}
                        helperText={errors.new_password}
                        required
                    />
                    <TextField className="!flex w-[20vw] !my-4 !ml-8"
                        label="Confirmar Contraseña"
                        type="password"
                        name="confirm"
                        value={values.confirm}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.confirm && Boolean(errors.confirm?.length)}
                        helperText={errors.confirm?.length ? "El campo debe ser igual al de la contraseña nueva" : ""}
                        required
                    />
                    <Button className="!flex w-36 !ml-auto !mr-8 !mb-6 !bg-[#085F63] !text-[white]" type="submit">
                        Guardar
                    </Button>
                </form>
            </Box>
            <Snackbar
                open={messageState}
                message={message}
                onClose={handleClose}
                autoHideDuration={2500}
                ContentProps={{ sx: { backgroundColor: "#085F63" } }}
            />
        </Paper>
    )
}

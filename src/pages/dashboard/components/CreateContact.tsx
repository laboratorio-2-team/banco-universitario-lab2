import { Button, Paper, Snackbar, SnackbarCloseReason, TextField, Typography } from "@mui/material"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useTheme } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FromCreateContact, initialValuesContact, validationSchemaContact } from "../../../schemas/createContactSchema";
import { FormikHelpers, useFormik } from "formik";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@store/store";
import { createContactAsync } from "@store/async";

export const CreateContact = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  // const { status } = useSelector<RootState>((state) => state.contacts) as ContactsState;
  const dispatch = useDispatch<AppDispatch>();
  const [messageState, setMessageState] = useState(false);
  const [message] = useState("");
  const handleClose = (event: React.SyntheticEvent | Event, reason: SnackbarCloseReason) => {
    console.log({ event, reason });

    setMessageState(false);
  };
  const onSubmit = async (values: FromCreateContact, formikHelpers: FormikHelpers<FromCreateContact>) => {
    if (!errors.account_number && !errors.alias && !errors.description) {
      formikHelpers.resetForm();
      await dispatch(createContactAsync(values));
    }
  };
  const { errors, touched, values, handleSubmit, handleBlur, handleChange } = useFormik<FromCreateContact>({
    initialValues: initialValuesContact,
    validationSchema: validationSchemaContact,
    onSubmit
  });
  return (
    <>
      <Button onClick={() => { navigate("/contacts") }}>
        <ArrowBackIcon style={{ color: "#49BEB7" }} />
      </Button>
      <Typography className="!ml-12" fontFamily={theme.typography.fontFamily} fontSize={"2rem"}>
        Crear Nuevo Contacto
      </Typography>
      <Paper className="!w-2/3 !h-[460px] !justify-center ml-[16vw]">
        <form onSubmit={handleSubmit}>
          <TextField
            className="!mt-12 !ml-12 !w-[20vw]"
            label="Alias"
            name="alias"
            value={values.alias}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.alias && Boolean(errors.alias?.length)}
            helperText={errors.alias}
          />
          <TextField
            className="!mt-12 !ml-[4.8rem] !w-[20vw]"
            label="Numero de Cuenta"
            name="account_number"
            value={values.account_number}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.account_number && Boolean(errors.account_number?.length)}
            helperText={errors.account_number?.length ? "Debe solo contener números (20 caracteres)" : ""}
          />
          <TextField
            className="!my-8 !ml-12 !w-[44vw]"
            label="Descripción"
            name="description"
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.description && Boolean(errors.description?.length)}
            helperText={errors.description}
          />
          <Button className="!flex w-36 !ml-auto !mr-12 !my-6 !bg-[#085F63] !text-[white]" type="submit">
            Guardar
          </Button>
        </form>
        <Snackbar
          open={messageState}
          message={message}
          onClose={handleClose}
          autoHideDuration={2500}
          ContentProps={{ sx: { backgroundColor: "#085F63" } }}
        />
      </Paper>
    </>
  )
}

import { Button, Dialog, DialogActions, DialogTitle, Paper, TextField, Typography } from "@mui/material"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useTheme } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store/store";
import { ContactsState, UpdateContactParam } from "@interfaces/contact.interface";
import { deleteContactAsync, updateContactAsync } from "@store/async";
import { removeContact } from "@store/slices";
import { useFormik } from "formik";
import { validationSchemaEdit } from "../../../schemas";

export const EditContact = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const [edit, setEdit] = useState(true);
    const [open, setOpen] = useState(false);
    const { contactSelected } = useSelector<RootState>((state) => state.contacts) as ContactsState;
    const dispatch = useDispatch<AppDispatch>();
    const initialValues: UpdateContactParam = {
      alias: contactSelected?.alias || "",
      description: contactSelected?.description || "",
      id: contactSelected?.id || 0
    };
    const onSubmit = async () => {
      if (isValid) {
        await dispatch(updateContactAsync(values));
      }
    }
    const { errors, touched, values, handleSubmit, handleBlur, handleChange, isValid } = useFormik<UpdateContactParam>({
      initialValues,
      validationSchema:validationSchemaEdit,
      onSubmit
    })
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    const handleDelete = async () => {
      if (contactSelected?.id) {
        await dispatch(deleteContactAsync(contactSelected.id));
        handleClose();
        dispatch(removeContact());
        navigate("/contacts");
      }
    }
  return (
    <>
    <Button onClick={()=>{navigate("/contacts")}}>
      <ArrowBackIcon style={{ color: "#49BEB7"}}/>
    </Button>
    <Typography className="!ml-12" fontFamily={theme.typography.fontFamily} fontSize={"2rem"}>
      Detalle Contacto
    </Typography>
    <Paper className="!w-2/3 !h-[460px] !justify-center ml-[16vw]">
      <form onSubmit={handleSubmit}>
        <TextField
        className="!mt-12 !ml-12 !w-[20vw]"
        label="Alias"
        name="alias"
        disabled={edit}
        value={values.alias}
        onBlur={handleBlur}
        onChange={handleChange}
        error={touched.alias && Boolean(errors.alias?.length)}
        helperText={errors.alias}
        sx={{
          "& .MuiInputBase-input.Mui-disabled": {
            WebkitTextFillColor: "#000000",
        },
        }}
        />
        <TextField
        className="!mt-12 !ml-[4.8rem] !w-[20vw]"
        label="Numero de Cuenta"
        name="account_number"
        disabled={true}
        value={contactSelected?.account_number || ""}
        sx={{
          "& .MuiInputBase-input.Mui-disabled": {
            WebkitTextFillColor: "#000000",
        },
        }}
        />
        <TextField
        className="!my-8 !ml-12 !w-[44vw]"
        label="Descripción"
        name="description"
        disabled={edit}
        value={values.description}
        onBlur={handleBlur}
        onChange={handleChange}
        error={touched.description && Boolean(errors.description?.length)}
        helperText={errors.description}
        InputLabelProps={{ shrink: true }}
        sx={{
          "& .MuiInputBase-input.Mui-disabled": {
            WebkitTextFillColor: "#000000",
        },
        }}
        />
        {
        edit ? 
        <>
        <Button className="!w-[10vw] !my-6 !bg-[red] !text-[white] !ml-[10vw]"
        onClick={handleClickOpen}
        >Eliminar</Button>
        <Button className="!w-[10vw] !my-6 !bg-[#49BEB7] !text-[white] !ml-[15vw]"
        onClick={()=>{setEdit(false)}}>Editar</Button>
        </> :
        <Button className="!flex !w-[10vw] !ml-auto !mr-12 !my-6 !bg-[#085F63] !text-[white]" type="submit">Guardar</Button>
        }
      </form>
      <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      >
        <DialogTitle>¿Está seguro que deseas eliminar el contacto?</DialogTitle>
        <DialogActions>
          <Button
          className="!bg-[#49BEB7] !text-[white]"
          onClick={handleClose}>Cancelar</Button>
          <Button
          className="!bg-[red] !text-[white]"
          onClick={handleDelete}>Eliminar</Button>
        </DialogActions>
      </Dialog>
    </Paper>
    </>
  )
}

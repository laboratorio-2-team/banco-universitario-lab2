import { Button, Paper, TextField, Typography } from "@mui/material"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useTheme } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const EditContact = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const [edit, setEdit] = useState(true);
  return (
    <>
    <Button onClick={()=>{navigate("/contacts")}}>
      <ArrowBackIcon style={{ color: "#49BEB7"}}/>
    </Button>
    <Typography className="!ml-12" fontFamily={theme.typography.fontFamily} fontSize={"2rem"}>
      Detalle Contacto
    </Typography>
    <Paper className="!w-2/3 !h-[460px] !justify-center ml-[16vw]">
      <form>
        <TextField
        className="!mt-12 !ml-12 !w-[20vw]"
        label="Alias"
        name="alias"
        disabled={edit}
        />
        <TextField
        className="!mt-12 !ml-[4.8rem] !w-[20vw]"
        label="Numero de Cuenta"
        name="account_number"
        disabled={edit}
        />
        <TextField
        className="!my-8 !ml-12 !w-[44vw]"
        label="Descripción"
        name="description"
        disabled={edit}
        />
        {
        edit ? 
        <>
        <Button className="!w-[10vw] !my-6 !bg-[red] !text-[white] !ml-[10vw]">Eliminar</Button>
        <Button className="!w-[10vw] !my-6 !bg-[#49BEB7] !text-[white] !ml-[15vw]"
        onClick={()=>{setEdit(false)}}>Editar</Button>
        </> :
        <Button className="!flex !w-[10vw] !ml-auto !mr-12 !my-6 !bg-[#085F63] !text-[white]" type="submit">Guardar</Button>
        }
      </form>
    </Paper>
    </>
  )
}

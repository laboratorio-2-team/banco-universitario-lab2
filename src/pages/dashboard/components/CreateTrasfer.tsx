import { Box, Button, Drawer, InputAdornment, List, Paper, TextField, Typography } from "@mui/material"
import { useTheme } from "styled-components"
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import { useState } from "react";
export const CreateTrasfer = () => {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
      };
  return (
    <Paper className="!w-2/3 !justify-center ml-[16vw]">
      <form>
      <Typography className="!ml-12 !py-4" fontFamily={theme.typography.fontFamily} fontWeight={"bold"}>
        Desde mi cuenta
      </Typography>
      <Typography className="!ml-12 !bg-[#DFEAF2] !w-[18vw] !rounded !border-2 !border-[#085e632a]" fontFamily={theme.typography.fontFamily} fontWeight={"medium"}>
        {`1111************1111 - Bs. 1.000,00`}
      </Typography>
      <TextField 
      className="!flex w-[20vw] !my-6 !ml-12"
      label="Monto a transferir"
      
      InputProps={{startAdornment: <InputAdornment position="start">Bs</InputAdornment>}}
      />
      <Button className="!text-[#49BEB7] !font-bold !ml-12" onClick={toggleDrawer(true)}>
        <ImportContactsIcon style={{ color: "#49BEB7", marginRight: "10px" }}/>
        Buscar en contactos
      </Button>
      <TextField
      className="!flex w-[20vw] !my-6 !ml-12"
      label="Número de cuenta a transferir"
      />
      <TextField 
      className="!flex w-[40vw] !my-6 !ml-12"
      label="Motivo"
      />
      <Button type="submit" className="!ml-[12vw] !my-6 !w-[30vw] !bg-[#085F63] !text-[white]">
        Continuar
      </Button>
      </form>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
        <Box className="!w-[20vw]">
          <Typography className="!my-6 text-[#053436]" fontFamily={theme.typography.fontFamily} fontWeight={"bold"} fontSize={"1.5rem"} textAlign={"center"}>
            Buscar Contacto
          </Typography>
          <TextField
          className="!ml-6 !w-[17.5vw]"
          label="Buscar"
          />
          <List>
            {/*here list contacts*/}
          </List>
        </Box>
      </Drawer>
    </Paper>
  )
}

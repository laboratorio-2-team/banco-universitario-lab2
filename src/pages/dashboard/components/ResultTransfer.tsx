import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import CancelIcon from '@mui/icons-material/Cancel';
import { Box, Button, Paper, Typography } from '@mui/material';
import { useTheme } from 'styled-components';

export const ResultTransfer = () => {
    const theme = useTheme();
  return (
    <Paper className="!w-2/3 !justify-center ml-[16vw]">
      {true ? 
      <CheckCircleOutlinedIcon className='!ml-[24vw] !my-6' style={{color:"green", fontSize:"8rem"}}/> : 
      <CancelIcon className='!ml-[24vw] !my-6' style={{color:"red", fontSize:"8rem"}}/>}
      <Typography textAlign={"center"} style={{color:`${true ? "green" : "red"}`}}>
        {true ? "Transferencia Realizada" : "Hubo un error en la transferencia"}
      </Typography>
      <Typography className="!text-[#053436]" textAlign={"center"} fontFamily={theme.typography.fontFamily} fontSize={"1.2rem"} fontWeight={"medium"}>
        Monto Transferido
      </Typography>
      <Typography className="!text-[#053436]" textAlign={"center"} fontFamily={theme.typography.fontFamily} fontSize={"1.8rem"} fontWeight={"medium"}>
        {`BS 1.650,00`}
      </Typography>
      <Box className="!grid !grid-cols-2">
      <Typography fontFamily={theme.typography.fontFamily} fontSize={"1.2rem"} className="!text-[#053436] !ml-8">
            Fecha:
        </Typography>
        <Typography textAlign={"right"} fontFamily={theme.typography.fontFamily} fontSize={"1.2rem"} className="!text-[#053436] !mr-8">
          {`26/07/2024`}
        </Typography>
        <Typography fontFamily={theme.typography.fontFamily} fontSize={"1.2rem"} className="!text-[#053436] !ml-8">
          Nombre del Beneficiario:
        </Typography>
        <Typography textAlign={"right"} fontFamily={theme.typography.fontFamily} fontSize={"1.2rem"} className="!text-[#053436] !mr-8">
          {`Jhon Doe`}
        </Typography>
        <Typography fontFamily={theme.typography.fontFamily} fontSize={"1.2rem"} className="!text-[#053436] !ml-8">
          Numero de Producto:
        </Typography>
        <Typography textAlign={"right"} fontFamily={theme.typography.fontFamily} fontSize={"1.2rem"} className="!text-[#053436] !mr-8">
          {`1111 **** **** ****1111`}
        </Typography>
        <Typography fontFamily={theme.typography.fontFamily} fontSize={"1.2rem"} className="!text-[#053436] !ml-8">
          Descripción:
        </Typography>
        <Typography textAlign={"right"} fontFamily={theme.typography.fontFamily} fontSize={"1.2rem"} className="!text-[#053436] !mr-8">
          {`lol`}
        </Typography>
      </Box>
      <Typography textAlign={"center"} fontFamily={theme.typography.fontFamily} fontSize={"1.2rem"} className="!text-red-600">
        {true ? "" : "Por favor, verifique los datos e inténtelo de nuevo más tarde"}
      </Typography>
      <Button className="!w-[15vw] !my-6 !text-[#053436] !border-[#053436] !ml-[8vw]" variant="outlined">
        Volver al Historial
      </Button>
      <Button className="!w-[15vw] !my-6 !bg-[#085F63] !text-[white] !ml-[10vw]">
        {true ? "Realizar otra transferencia" : "Intentarlo de nuevo"}
      </Button>
    </Paper>
  )
}

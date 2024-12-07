import { Box, Button, Divider, Paper, Typography } from "@mui/material"
import { useTheme } from "styled-components"

export const ConfirmTransfer = () => {
    const theme = useTheme();
  return (
    <Paper className="!w-2/3 !justify-center ml-[16vw]">
      <Typography className="!text-[#053436] !py-4 !ml-12" fontFamily={theme.typography.fontFamily} fontSize={"1.2rem"} fontWeight={"medium"}>
        Confirmar Transferencia
      </Typography>
      <Divider/>
      <Typography className="!text-[#053436]" textAlign={"center"} fontFamily={theme.typography.fontFamily} fontSize={"1.2rem"} fontWeight={"medium"}>
        Monto a transferir
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
      <Button className="!w-[10vw] !my-6 !text-[#053436] !border-[#053436] !ml-[10vw]" variant="outlined">Cancelar</Button>
      <Button className="!w-[10vw] !my-6 !bg-[#085F63] !text-[white] !ml-[15vw]">Confirmar</Button>
    </Paper>
  )
}

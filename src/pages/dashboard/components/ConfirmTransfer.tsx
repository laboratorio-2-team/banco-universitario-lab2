import { MovementsState } from "@interfaces/movements.interface";
import { Box, Button, Divider, Paper, Typography } from "@mui/material"
import { AppDispatch, RootState } from "@store/store";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "styled-components"
import { formatAccountNumber, formatCurrency } from "../../../utils/helpers";
import { useNavigate } from "react-router-dom";
import { removeTransfer } from "@store/slices";
import { createTransferAsync } from "@store/async";

export const ConfirmTransfer = () => {
    const theme = useTheme();
    const date = new Date();
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const { transferData, userToTransfer } = useSelector<RootState>((state) => state.movements) as MovementsState;

    const confirm = async () =>{
      if (transferData) {
        const transferInfo = { amount: parseFloat(`${transferData.amount}`), account_number: transferData.account_number, description: transferData.description };
        await dispatch(createTransferAsync(transferInfo));
        navigate("/transfer/result");
      }
      else {
        alert("Hubo un error con la transferencia intente más tarde");
      }
    }
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
        {`${formatCurrency(transferData?.amount || 0)}`}
      </Typography>
      <Box className="!grid !grid-cols-2">
        <Typography fontFamily={theme.typography.fontFamily} fontSize={"1.2rem"} className="!text-[#053436] !ml-8">
            Fecha:
        </Typography>
        <Typography textAlign={"right"} fontFamily={theme.typography.fontFamily} fontSize={"1.2rem"} className="!text-[#053436] !mr-8">
          {date.toLocaleString("es-ve", { year:"2-digit", month:"2-digit",day:"2-digit" })}
        </Typography>
        <Typography fontFamily={theme.typography.fontFamily} fontSize={"1.2rem"} className="!text-[#053436] !ml-8">
          Nombre del Beneficiario:
        </Typography>
        <Typography textAlign={"right"} fontFamily={theme.typography.fontFamily} fontSize={"1.2rem"} className="!text-[#053436] !mr-8">
          {`${userToTransfer?.first_name} ${userToTransfer?.last_name}`}
        </Typography>
        <Typography fontFamily={theme.typography.fontFamily} fontSize={"1.2rem"} className="!text-[#053436] !ml-8">
          Numero de Producto:
        </Typography>
        <Typography textAlign={"right"} fontFamily={theme.typography.fontFamily} fontSize={"1.2rem"} className="!text-[#053436] !mr-8">
          {`${formatAccountNumber(transferData?.account_number || "")}`}
        </Typography>
        <Typography fontFamily={theme.typography.fontFamily} fontSize={"1.2rem"} className="!text-[#053436] !ml-8">
          Descripción:
        </Typography>
        <Typography textAlign={"right"} fontFamily={theme.typography.fontFamily} fontSize={"1.2rem"} className="!text-[#053436] !mr-8">
          {`${transferData?.description}`}
        </Typography>
      </Box>
      <Button className="!w-[10vw] !my-6 !text-[#053436] !border-[#053436] !ml-[10vw]" variant="outlined"
      onClick={()=>{
        dispatch(removeTransfer());
        navigate("/transfer");
      }}>Cancelar</Button>
      <Button className="!w-[10vw] !my-6 !bg-[#085F63] !text-[white] !ml-[15vw]"
      onClick={confirm}
      >Confirmar</Button>
    </Paper>
  )
}

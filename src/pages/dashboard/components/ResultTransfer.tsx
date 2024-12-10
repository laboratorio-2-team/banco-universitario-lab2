import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import CancelIcon from '@mui/icons-material/Cancel';
import { Box, Button, Paper, Typography } from '@mui/material';
import { useTheme } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { MovementsState } from '@interfaces/movements.interface';
import { AppDispatch, RootState } from '@store/store';
import { formatAccountNumber, formatCurrency } from '../../../utils/helpers';
import { removeTransfer } from '@store/slices';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { LoadingStatesEnum } from '@config/constants';

export const ResultTransfer = () => {
    const theme = useTheme();
    const date = new Date();
    const navigate = useNavigate();
    const { transferData, userToTransfer, status } = useSelector<RootState>((state) => state.movements) as MovementsState;
    const dispatch = useDispatch<AppDispatch>();
    const [transferState, setTransferState] = useState<boolean>(false);
    const backToMoveMents = () => {
      dispatch(removeTransfer());
      navigate("/history");
    };
    const backToTransfers = () => {
      dispatch(removeTransfer());
      navigate("/transfer");
    };
    useEffect(()=>{
      if (status === LoadingStatesEnum.SUCCEEDED) {
        setTransferState(true);
      }
    },[]);
  return (
    <Paper className="!w-2/3 !justify-center ml-[16vw]">
      {transferState ? 
      <CheckCircleOutlinedIcon className='!ml-[24vw] !my-6' style={{color:"green", fontSize:"8rem"}}/> : 
      <CancelIcon className='!ml-[24vw] !my-6' style={{color:"red", fontSize:"8rem"}}/>}
      <Typography textAlign={"center"} style={{color:`${transferState ? "green" : "red"}`}}>
        {transferState ? "Transferencia Realizada" : "Hubo un error en la transferencia"}
      </Typography>
      <Typography className="!text-[#053436]" textAlign={"center"} fontFamily={theme.typography.fontFamily} fontSize={"1.2rem"} fontWeight={"medium"}>
        Monto Transferido
      </Typography>
      <Typography className="!text-[#053436]" textAlign={"center"} fontFamily={theme.typography.fontFamily} fontSize={"1.8rem"} fontWeight={"medium"}>
        {`${formatCurrency(transferData?.amount || 0)}`}
      </Typography>
      <Box className="!grid !grid-cols-2">
      <Typography fontFamily={theme.typography.fontFamily} fontSize={"1.2rem"} className="!text-[#053436] !ml-8">
            Fecha:
        </Typography>
        <Typography textAlign={"right"} fontFamily={theme.typography.fontFamily} fontSize={"1.2rem"} className="!text-[#053436] !mr-8">
          {date.toLocaleString("es-ve", { month:"2-digit", day:"2-digit", year:"2-digit" })}
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
          {transferData?.description || ""}
        </Typography>
      </Box>
      <Typography textAlign={"center"} fontFamily={theme.typography.fontFamily} fontSize={"1.2rem"} className="!text-red-600">
        {transferState ? "" : "Por favor, verifique los datos e inténtelo de nuevo más tarde"}
      </Typography>
      <Button className="!w-[15vw] !my-6 !text-[#053436] !border-[#053436] !ml-[8vw]" variant="outlined"
      onClick={backToMoveMents}
      >
        Volver al Historial
      </Button>
      <Button className="!w-[15vw] !my-6 !bg-[#085F63] !text-[white] !ml-[10vw]"
      onClick={backToTransfers}
      >
        {transferState ? "Realizar otra transferencia" : "Intentarlo de nuevo"}
      </Button>
    </Paper>
  )
}

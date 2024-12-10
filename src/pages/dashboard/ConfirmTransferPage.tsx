import { useSelector } from 'react-redux';
import { ConfirmTransfer } from './components'
import { Box } from '@mui/material'
import { RootState } from '@store/store';
import { MovementsState } from '@interfaces/movements.interface';
import { Navigate } from 'react-router-dom';
export const CONFIRM_ROUTE = "confirm";
export const ConfirmTransferPage = () => {
    const { userToTransfer } = useSelector<RootState>((state) => state.movements) as MovementsState;
    if (!userToTransfer) return <Navigate to="/transfer"></Navigate>
  return (
    <Box className="!bg-gray-400 h-full py-8 px-2">
        <ConfirmTransfer/>
    </Box>
  )
}

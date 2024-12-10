import { Box } from '@mui/material'
import { ResultTransfer } from './components'

export const RESULT_ROUTE = 'result';

export const ResultTransferPage = () => {
  return (
    <Box className="!bg-gray-400 h-full py-8 px-2">
        <ResultTransfer/>
    </Box>
  )
};

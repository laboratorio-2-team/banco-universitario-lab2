import { Box } from '@mui/material'
import { TransferHistory } from './components'

export const HISTORY_ROUTE = 'history'


export const HistoryPage = () => {
    return (
        <Box className="!bg-gray-400 h-full py-8 px-2">
            <TransferHistory />
        </Box>
    )
}

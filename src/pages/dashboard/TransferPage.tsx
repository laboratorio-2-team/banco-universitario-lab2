import { Box, Typography } from "@mui/material"
import { useTheme } from "styled-components";
import { CreateTrasfer } from "./components";

export const TRANSFER_ROUTE = 'transfer';

export const TransferPage = () => {
    const theme = useTheme();
  return (
    <Box className="!bg-gray-400 h-full py-8 px-2">
        <Typography className="!ml-12" fontFamily={theme.typography.fontFamily} fontSize={"2rem"}>Trasferir a Terceros</Typography>
        <CreateTrasfer/>
    </Box>
  )
}

import { Box } from "@mui/material"
import { CreateContact } from "./components"

export const CREATE_ROUTE = '/create';

export const CreateContactPage = () => {
  return (
    <Box className="!bg-gray-400 h-full py-8 px-2">
        <CreateContact/>
    </Box>
  )
}

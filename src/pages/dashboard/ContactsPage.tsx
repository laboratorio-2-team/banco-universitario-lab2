import { Box } from "@mui/material"
import { ContactsDirectory } from "./components"

export const CONTACTS_ROUTE = 'contacts';

export const ContactsPage = () => {
  return (
    <Box className="!bg-gray-400 h-full py-8 px-2">
        <ContactsDirectory/>
    </Box>
  )
}

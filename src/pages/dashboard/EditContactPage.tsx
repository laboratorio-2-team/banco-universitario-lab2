import { ContactsState } from "@interfaces/contact.interface";
import { Box } from "@mui/material";
import { RootState } from "@store/store";
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";
import { EditContact } from "./components";

export const EDIT_ROUTE = 'edit';

export const EditContactPage = () => {
    const { contactSelected } = useSelector<RootState>((state) => state.contacts) as ContactsState;
    if (!contactSelected) (
        <Navigate to="/contacts"></Navigate>
    )
  return (
    <Box className="!bg-gray-400 h-full py-8 px-2">
        <EditContact/>
    </Box>
  )
}

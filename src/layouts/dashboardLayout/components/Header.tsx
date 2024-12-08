import { Avatar, Box, Button, Menu, MenuItem, Typography } from "@mui/material"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

import { CustomButton } from "@components/CustomButton"
import { Logo } from "@components/Logo"
import { useEffect, useState } from "react";
import { removeJWT } from "../../../utils/localStorage";
import { useNavigate } from "react-router-dom";
import { whoImIApi } from "../../../services/modules/user";
interface ResponseWhoImI { account_number: string, birth_date: string, document_number: string, email: string, first_name: string, last_name: string, phone_number: string }
export const Header = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const [user, setUser] = useState<ResponseWhoImI>({account_number:"", birth_date:"", document_number:"", email:"", first_name:"", last_name:"", phone_number:""});
    const navigate = useNavigate();
    const firstLetter = (word: string) => {
        if (!word) return ""
        return word[0];
    }
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleLogOut = () => {
        removeJWT();
        navigate("/login");
    };
    useEffect(() => {
        whoImIApi().then(res => {
            if (!res?.data?.errors?.length) {
                const { data } = res;
                setUser(data);
            }
        })
    },[])
    return (
        <Box className="h-full flex flex-row flex-nowrap justify-between items-center">
            <Box className="flex flex-row flex-nowrap items-center gap-24 ">
                <Logo className="!max-w-[186px]" />
                <Typography variant='h6' className="!font-semibold !text-[28px] !text-primary-50">

                </Typography>
            </Box>

            <Box className="flex flex-nowrap flex-row gap-4">
                <CustomButton
                    startIcon={<VisibilityOutlinedIcon />}
                    variant="text"
                >
                    Ocultar Saldos
                </CustomButton>
                <Box className="flex flex-row flex-nowrap items-center">
                    <PersonOutlineOutlinedIcon color="primary" />
                    <Typography>
                        {`${user.first_name || "Jhon"} ${user.last_name || "Doe"}`}
                    </Typography>
                </Box>
                <Avatar className="!bg-primary-50">{`${firstLetter(user.first_name) || "O"}${firstLetter(user.last_name) || "P"}`}</Avatar>
                <Button
                aria-controls={ open ? "basic_menu" : undefined}
                aria-haspopup={ open ? true : undefined }
                aria-expanded={ open ? true : undefined }
                onClick={handleClick}
                >
                    <ArrowDownwardIcon style={{ color: "#085F63" }}/>
                </Button>
                <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                >
                    <MenuItem onClick={handleLogOut}>Cerrar Sesión</MenuItem>
                </Menu>
            </Box>
        </Box>
    )
}

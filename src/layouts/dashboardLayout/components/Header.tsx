import { Avatar, Box, Typography } from "@mui/material"

import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

import { CustomButton } from "@components/CustomButton"
import { Logo } from "@components/Logo"

export const Header = () => {
    return (
        <Box className="flex flex-row flex-nowrap justify-between">
            <Box className="flex flex-row flex-nowrap items-center gap-24 ">
                <Logo className="max-w-[186px]" />
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
                        Jhon Doe
                    </Typography>
                </Box>
                <Avatar className="!bg-primary-50">OP</Avatar>
            </Box>
        </Box>
    )
}
